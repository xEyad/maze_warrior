import { World } from './../models/world';
import { Injectable } from '@angular/core';
import { Dir } from '../models/walker';

@Injectable({
  providedIn: 'root'
})

///serves as the MAIN entry point of game model
export class GameService {

  world : World;
  gameLoop =  null;
  constructor()
  {
    this.world = new World();
  }

  MoveWalker(event: KeyboardEvent, type: string):void
  {
    if (event.key === 'ArrowUp')
      this.world.MoveWalker(Dir.up);
    else if (event.key === 'ArrowDown')
      this.world.MoveWalker(Dir.down);
    else  if (event.key === 'ArrowLeft')
      this.world.MoveWalker(Dir.left);
    else  if (event.key === 'ArrowRight')
      this.world.MoveWalker(Dir.right);

  }
  StartGameLoop()
  {
    this.gameLoop = setInterval(() =>
    {
      this.world.UpdateModel();
      console.clear();
      this.world.Draw();

    }, this.MsFromFPS(15));
  }

  private MsFromFPS(fps:number):number
  {
    return 1000/fps;
  }

}
