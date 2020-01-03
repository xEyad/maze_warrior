import { Maze } from './../models/maze';
import { Point } from './../models/utility/point';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameMetaService
{

  constructor()
  {
    this._tileSize = 20;
    this._simulationSpeed = 10;
    this._mazeWidth = 25;
    this._mazeHeight = 25;
    this._startPos = new Point(0,0);
    this._goalpos = new Point(1,1);
    this._isSimulationRunning = false;
    this._isSimulationStopped = false;
    this._maze = Maze.CompleteMaze(this.mazeWidth,this.mazeHeight,this.startPos,this.goalpos);
  }
  SetMazeDimensions(width:number,height:number) :void
  {
    this._mazeWidth = width;
    this._mazeHeight = height;
    this.UpdateMaze();
  }
  private UpdateMaze():void
  {
    if(this.maze.width!=this.mazeWidth || this.maze.height != this.mazeHeight)
      this._maze = Maze.CompleteMaze(this.mazeWidth,this.mazeHeight,this.startPos,this.goalpos);
  }
  private _tileSize:number;
  private _simulationSpeed:number;
  private _mazeWidth:number;
  private _mazeHeight:number;
  private _startPos:Point ;
  private _goalpos:Point ;
  private _isSimulationRunning:boolean;
  private _isSimulationStopped:boolean;
  private _maze:Maze;


  get tileSize():Readonly<number> {return this._tileSize;}
  get simulationSpeed():Readonly<number> {return this._simulationSpeed;}
  get mazeWidth():Readonly<number> {return this._mazeWidth;}
  get mazeHeight():Readonly<number> {return this._mazeHeight;}
  get startPos():Readonly<Point>  {return this._startPos;}
  get goalpos():Readonly<Point>  {return this._goalpos;}
  get isSimulationRunning():Readonly<boolean> {return this._isSimulationRunning;}
  get isSimulationStopped():Readonly<boolean> {return this._isSimulationStopped;}
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
  set startPos(val:Readonly<Point>){this._startPos=val;}
  set goalpos(val:Readonly<Point>){this._goalpos=val;}
  set isSimulationRunning(val:boolean){this._isSimulationRunning=val;}
  set isSimulationStopped(val:boolean){this._isSimulationStopped=val;}

}
