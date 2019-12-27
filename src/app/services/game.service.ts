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

  world : World;
  gameLoop =  null;
  private gameEnded = false;
  constructor()
  {
    let maze = new Maze(4,5,new Point(0,0));
    maze.SetTileState(new Point(1,1),State.blocked);
    maze.SetTileState(new Point(2,1),State.blocked);
    maze.SetTileState(new Point(3,1),State.blocked);
    maze.SetTileState(new Point(1,3),State.blocked);
    maze.SetTileState(new Point(1,4),State.blocked);
    maze.SetTileState(new Point(3,3),State.blocked);
    maze.SetGoalAt(new Point(3,4));
    this.world = new World(maze);
  }

  IsGameEnded() : boolean
  {
    return this.gameEnded;
  }
  ///only responds to arrowKeys
  MoveWalkerByKbd(event: KeyboardEvent):void
  {
    if(this.IsGameEnded())
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
    if(!this.IsGameEnded())
      this.world.MoveWalker(dir);
  }

  private UpdateModel():void
  {
    if(this.world.walkerPos.Equals(this.world.goalPos))
      this.gameEnded = true;
  }
  private Draw():void
  {
    console.clear();
    this.world.Draw();

    if(this.IsGameEnded())
      console.log('you have reached your goal');

  }

  StartGameLoop()
  {
    this.gameLoop = setInterval(() =>
    {
      this.UpdateModel();
      this.Draw();
    }, this.MsFromFPS(5));
  }

  private MsFromFPS(fps:number):number
  {
    return 1000/fps;
  }

}
