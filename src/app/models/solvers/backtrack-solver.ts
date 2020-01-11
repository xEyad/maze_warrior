import { Emath } from './../utility/eMath';
import { GameService } from './../../services/game.service';
import { State } from '../tile';
import { Walker } from '../walker';
import { Point } from '../utility/point';

export class BacktrackSolver
{
  constructor(game:GameService,simulationSpeed:number)
  {
    this.game = game;
    this.walker = this.game.walker;
    this.solvingSpeed = simulationSpeed;
    this.noMoreTracks = false;
    this.branchingPointsIndicies = [];
    this.intervalRefrence = null;
  }
  IsNoSolutionFound():Readonly<boolean>
  {
    return this.noMoreTracks
  }
  Talk():any
  {
    return this.GetAvailableTilesAround(this.walker.CurPos());
  }
  SolveGame():void
  {
    while(!(this.game.World().walkerPos.Equals(this.game.World().goalPos) || this.noMoreTracks))
      this.SolveAStep();
  }
  SolveInSteps():void
  {
    if(this.intervalRefrence != null)
      return;
    this.intervalRefrence = setInterval(()=>{
      if(!this.isPaused)
      {
        this.game.DoGameStep();
        this.SolveAStep();
      }
      if(this.game.IsGameFinished() || this.noMoreTracks)
      {
        clearInterval(this.intervalRefrence);
      }
    },1000/this.solvingSpeed)

  }
  SolveAStep():void
  {
    if(this.game.IsGameFinished() || this.noMoreTracks)
        return;
    const availableTiles =  this.GetAvailableTilesAround(this.walker.CurPos());
    if(availableTiles.length > 0)
    {
      if(availableTiles.length>1)
        this.branchingPointsIndicies.push(this.walker.MoveStack().length-1); //the index of the branching point

      const loc = availableTiles[Emath.GetRandomInt(0, availableTiles.length)];
      this.game.MoveWalker(this.walker.DirFromPoint(loc));
    }
    else if(!this.game.IsGameFinished())
      this.BacktrackToBranchingPoint();
  }
  StopSolving():void
  {
    clearInterval(this.intervalRefrence);
  }
  GetIndexedLocations() : Readonly<Point>[]
  {
    let indexedLocations:Point[] = [];
    for (const index of this.branchingPointsIndicies)
      indexedLocations.push(this.walker.MoveStack()[index]);

    return indexedLocations;
  }
  PauseSolving():void
  {
    this.isPaused = true;
  }
  ResumeSolving():void
  {
    this.isPaused = false;
  }
  private BacktrackToBranchingPoint():void
  {
    if(this.branchingPointsIndicies.length == 0)
    {
      this.noMoreTracks = true;
      return;
    }
    let branchingIndex = this.branchingPointsIndicies[this.branchingPointsIndicies.length-1];
    let moveStack = this.walker.MoveStack();
    let branchingPos = moveStack[branchingIndex];

    //make sure that the current branching point still have branches otherwise remove it
    if(this.GetAvailableTilesAround(branchingPos).length <= 1)
      this.branchingPointsIndicies.pop();

    this.game.PutWalkerAt(branchingPos);
  }

  private GetAvailableTilesAround(curPos) : Point[]
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

  private noMoreTracks:boolean;
  private branchingPointsIndicies:number[];
  private walker:Readonly<Walker>;
  private solvingSpeed:number;
  private intervalRefrence:NodeJS.Timer;
  private isPaused:boolean;
  private game:GameService;
}
