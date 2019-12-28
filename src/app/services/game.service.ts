import { Dir } from './../models/walker';
import { State } from './../models/tile';
import { Maze } from './../models/maze';
import { World } from './../models/world';
import { Injectable } from '@angular/core';
import { Point } from '../models/utility/point';
@Injectable({
  providedIn: 'root'
})

///serves as the MAIN entry point of game model
export class GameService {

  constructor()
  {
    this.mazeWidth = 4;
    this.mazeHeight = 5;
    let map =
    `s----
    ---xx
    -x--x
    -x--g`;
    this.world = new World(new Maze(map));
  }
  Talk():string
  {
    return this.world.Talk();
  }
  IsInsideWorld(loc:Point):boolean
  {
    return loc.x>=0 && loc.x < this.mazeWidth &&
           loc.y>=0 && loc.y < this.mazeHeight
  }
  TileState(location:Point):State
  {
    return this.world.TileState(location);
  }
  IsGameFinished() : boolean
  {
    return this.reachedGoal;
  }
  ///only responds to arrowKeys
  MoveWalkerByKbd(event: KeyboardEvent):void
  {
    if(this.IsGameFinished())
      return;
    if (event.key === 'ArrowUp')
      this.world.MoveWalker(Dir.up);
    else if (event.key === 'ArrowDown')
      this.world.MoveWalker(Dir.down);
    else  if (event.key === 'ArrowLeft')
      this.world.MoveWalker(Dir.left);
    else  if (event.key === 'ArrowRight')
      this.world.MoveWalker(Dir.right);
  }
  MoveWalker(dir:Dir):void
  {
    if(!this.IsGameFinished())
      this.world.MoveWalker(dir);
  }
  StartGameLoop()
  {
    this.gameLoop = setInterval(() =>
    {
      this.UpdateModel();
      this.Draw();
    }, this.MsFromFPS(5));
  }


  private UpdateModel():void
  {
    if(this.world.walkerPos.Equals(this.world.goalPos))
      this.reachedGoal = true;
  }
  private Draw():void
  {
    console.clear();
    this.world.Draw();

    if(this.IsGameFinished())
      console.log('you have reached your goal');

  }
  private MsFromFPS(fps:number):number
  {
    return 1000/fps;
  }
  readonly mazeWidth;
  readonly mazeHeight;
  readonly world : World;
  private gameLoop =  null;
  private reachedGoal = false;
}
