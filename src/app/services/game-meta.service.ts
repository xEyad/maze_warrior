import { Maze } from './../models/maze';
import { Point } from './../models/utility/point';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

///responsible for graphics configurations and game initialization data
export class GameMetaService
{

  constructor()
  {
    this._tileSize = 20;
    this._simulationSpeed = 10;
    this._mazeWidth = 25;
    this._mazeHeight = 25;
    this._startPos = new Point(0,0);
    this._goalPos = new Point(1,1);
    this._isSimulationRunning = false;
    this._isSimulationStopped = false;
    this._isSimulationStarted = false;
    this._maze = Maze.CompleteMaze(this.mazeWidth,this.mazeHeight,this.startPos,this.goalPos);
  }
  StartSimulation():void
  {
    this._isSimulationRunning = true;
    this._isSimulationStarted = true;
  }
  ResumeSimulation():void
  {
    this._isSimulationRunning = true;
  }
  PauseSimulation():void
  {
    this._isSimulationRunning = false;
  }
  StopSimulation():void
  {
    this._isSimulationStopped= true;
  }
  Reset():void
  {
    this._isSimulationRunning = false;
    this._isSimulationStopped = false;
    this._isSimulationStarted = false;
    this._maze = Maze.CompleteMaze(this.mazeWidth,this.mazeHeight,this.startPos,this.goalPos);
  }
  SetMazeDimensions(width:number,height:number) :void
  {
    this._mazeWidth = width;
    this._mazeHeight = height;
    this.UpdateMaze();
  }
  private UpdateMaze():void
  {
    if(
      this.maze.width!=this.mazeWidth ||
      this.maze.height != this.mazeHeight
      )
      this._maze = Maze.CompleteMaze(this.mazeWidth,this.mazeHeight,this.startPos,this.goalPos);
  }

  private _tileSize:number;
  private _simulationSpeed:number;
  private _mazeWidth:number;
  private _mazeHeight:number;
  private _startPos:Point ;
  private _goalPos:Point ;
  private _isSimulationRunning:boolean;
  private _isSimulationStopped:boolean;
  private _isSimulationStarted:boolean;
  private _maze:Maze;


  get tileSize():Readonly<number> {return this._tileSize;}
  get simulationSpeed():Readonly<number> {return this._simulationSpeed;}
  get mazeWidth():Readonly<number> {return this._mazeWidth;}
  get mazeHeight():Readonly<number> {return this._mazeHeight;}
  get startPos():Readonly<Point>  {return this._startPos;}
  get goalPos():Readonly<Point>  {return this._goalPos;}
  get isSimulationRunning():Readonly<boolean> {return this._isSimulationRunning;}
  get isSimulationStopped():Readonly<boolean> {return this._isSimulationStopped;}
  get isSimulationStarted():Readonly<boolean> {return this._isSimulationStarted;}
  get maze():Maze{return this._maze;}


  set tileSize(val:number){this._tileSize=val;}
  set simulationSpeed(val:number){this._simulationSpeed=val;}
  set mazeWidth(val:number)
  {
    this._mazeWidth=val;
    this.UpdateMaze();
  }
  set mazeHeight(val:number)
  {
    this._mazeHeight=val;
    this.UpdateMaze();
  }
  set startPos(val:Readonly<Point>)
  {
    if(this.startPos.Equals(this.goalPos))
      return;
    this._startPos=val;
    this._maze.ChangeStartPos(val)
  }
  set goalPos(val:Readonly<Point>)
  {
    if(this.startPos.Equals(this.goalPos))
      return;
    this._goalPos=val;
    this._maze.ChangeGoalPos(val);
  }
}
