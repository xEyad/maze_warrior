import { World } from './../models/world';
import { Injectable } from '@angular/core';
import { Dir } from '../models/walker';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  world : World;
  gameLoop =  null;
  constructor()
  {
    this.world = new World();
  }

  MoveWalker(event: KeyboardEvent, type: string):void
  {
    console.log('gameservice moveWalker. key: '+event.key);

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
    this.gameLoop = setInterval(() => {
      this.world.Run();
    }, 1000);
  }
}
