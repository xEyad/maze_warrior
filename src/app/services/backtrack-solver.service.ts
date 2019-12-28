import { State } from './../models/tile';
import { Walker, Dir } from './../models/walker';
import { GameService } from './game.service';
import { Injectable } from '@angular/core';
import { Point } from '../models/utility/point';

@Injectable({
  providedIn: 'root'
})
export class BacktrackSolverService
{

  constructor(public game:GameService)
  {
    this.walker = this.game.world.walker;
    this.moveStack.push(this.walker.CurPos());
    let simulationSpeed = 25;
    this.solvingSpeed = simulationSpeed;
    game.StartGameLoop(simulationSpeed);
  }
  Talk():any
  {
    return this.GetAvailableTiles();
  }
  SolveInSteps():void
  {
    setInterval(()=>{
      this.SolveAStep();
    },1000/this.solvingSpeed)

  }
  SolveAStep()
  {
    if(this.game.IsGameFinished() || this.noMoreTracks)
        return;

      if(this.GetAvailableTiles().length > 0)
      {
        const loc = this.GetAvailableTiles()[0];
        this.game.MoveWalker(this.DirFromPoint(loc));
        this.moveStack.push(loc);
      }
      else if(!this.game.IsGameFinished())
        this.BacktrackToBranchingPoint();
  }
  SolveGame():void
  {
    while(!(this.game.IsGameFinished() || this.noMoreTracks))
      this.SolveAStep();
  }

  private BacktrackToBranchingPoint():void
  {
    let backtrackStack = Array.from(this.moveStack);
    while(this.GetAvailableTiles().length == 0)
    {
      let prevPos = backtrackStack.pop();
      if(prevPos.Equals(this.walker.CurPos()))
        prevPos = backtrackStack.pop();
      if(prevPos == undefined)
      {
        this.noMoreTracks = true;
        return;
      }
      let dir = this.DirFromPoint(prevPos);
      this.game.MoveWalker(dir);
    }
  }
  private DirFromPoint(point:Point):Dir
  {
    if(point.x > this.walker.CurPos().x)
      return Dir.right;
    else if(point.x < this.walker.CurPos().x)
      return Dir.left;
    else if(point.y > this.walker.CurPos().y)
      return Dir.down;
    else if(point.y < this.walker.CurPos().y)
      return Dir.up;
    else
      throw `can't determine direction of point ${point} relative to the walker`;
  }
  private GetAvailableTiles() : Point[]
  {
    let curPos = this.walker.CurPos();
    let left = new Point(curPos.x-1,curPos.y);
    let right = new Point(curPos.x+1,curPos.y);
    let up = new Point(curPos.x,curPos.y-1);
    let down = new Point(curPos.x,curPos.y+1);

    let availableTiles:Point[] = [];

    if(this.IsAvailable(left))
      availableTiles.push(left);
    if(this.IsAvailable(right))
      availableTiles.push(right);
    if(this.IsAvailable(up))
      availableTiles.push(up);
    if(this.IsAvailable(down))
      availableTiles.push(down);
    return availableTiles;
  }

  private IsAvailable(loc:Point) : boolean
  {
    return (
      this.game.IsInsideWorld(loc) &&
      this.game.TileState(loc) == State.open &&
      !this.walker.IsVisitedBefore(loc)
      )
  }
  private noMoreTracks:boolean = false;
  private moveStack:Point[] = [];
  private walker:Walker;
  private solvingSpeed;
}
