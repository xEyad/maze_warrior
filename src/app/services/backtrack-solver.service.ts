import { State } from './../models/tile';
import { Walker, Dir } from './../models/walker';
import { GameService } from './game.service';
import { Injectable } from '@angular/core';
import { Point } from '../models/utility/point';

@Injectable({
  providedIn: 'root'
})
export class BacktrackSolverService {

  private walker:Walker;
  constructor(public game:GameService)
  {
    this.walker = this.game.world.walker;
    game.StartGameLoop();
  }
  Talk():any
  {
    return this.GetAvailableTiles();
  }
  SolveGame():void
  {


  }
  private GetAvailableTiles() : Point[]
  {
    let curPos = this.walker.CurPos();
    let left = new Point(curPos.x-1,curPos.y);
    let right = new Point(curPos.x+1,curPos.y);
    let up = new Point(curPos.x,curPos.y-1);
    let down = new Point(curPos.x,curPos.y+1);
    let availableTiles:Point[] = [left,right,up,down];

    let filterFnc = (loc:Point,index:number)=>{
      return (
        this.game.IsInsideWorld(loc) &&
        this.game.TileState(loc) == State.open &&
        !this.walker.VisitedPoints().includes(loc)
        )
    }
    return availableTiles.filter(filterFnc);
  }
}
