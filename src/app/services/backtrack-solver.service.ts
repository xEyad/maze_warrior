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
    let simulationSpeed = 60;
    this.solvingSpeed = simulationSpeed;
    game.StartGameLoop(simulationSpeed);
  }
  Talk():any
  {
    return this.GetAvailableTiles(this.walker.CurPos());
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
    let availableTiles =  this.GetAvailableTiles(this.walker.CurPos());
    if(availableTiles.length > 0)
    {
      if(availableTiles.length>1)
        this.branchingPointsIndicies.push(this.walker.MoveStack().length-1); //the index of the branching point

      const loc = availableTiles[0];
      this.game.MoveWalker(this.walker.DirFromPoint(loc));
    }
    else if(!this.game.IsGameFinished())
      this.BacktrackToBranchingPointUNSAFE();
  }

  SolveGame():void
  {
    while(!(this.game.IsGameFinished() || this.noMoreTracks))
      this.SolveAStep();
  }

  private BacktrackToBranchingPointUNSAFE():void
  {
    let branchingIndex = this.branchingPointsIndicies[this.branchingPointsIndicies.length-1];
    let moveStack = this.walker.MoveStack();
    let branchingPos = moveStack[branchingIndex];

    //make sure that the current branching point still have branches otherwise remove it
    if(this.GetAvailableTiles(branchingPos).length <= 1)
      this.branchingPointsIndicies.pop();

    if(branchingPos == undefined)
    {
      this.noMoreTracks = true;
      return;
    }
    this.game.world.PutWalkerAt(branchingPos);
  }
  private BacktrackToBranchingPoint():void
  {
    // let branchingIndex = this.branchingPoints[0];
    let backtrackStack = this.walker.MoveStack();
    while(this.GetAvailableTiles(this.walker.CurPos()).length == 0)
    {
      let prevPos = backtrackStack.pop();
      if(prevPos.Equals(this.walker.CurPos()))
        prevPos = backtrackStack.pop();
      if(prevPos == undefined)
      {
        this.noMoreTracks = true;
        return;
      }
      let dir = this.walker.DirFromPoint(prevPos);
      this.game.MoveWalker(dir);
    }
  }
  private GetAvailableTiles(curPos) : Point[]
  {
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
  private branchingPointsIndicies:number[]=[];
  private walker:Walker;
  private solvingSpeed;
}
