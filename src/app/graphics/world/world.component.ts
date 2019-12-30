import { World } from '../../models/world';
import { Tile } from '../../models/tile';
import { Component, OnInit, Input } from '@angular/core';
import { Point } from 'src/app/models/utility/point';
import { BacktrackSolverService } from 'src/app/services/backtrack-solver.service';

@Component({
  selector: 'gfx-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  @Input() world : Readonly<World>;
  @Input() indexedLocations:Readonly<Point>[];
  @Input() solver:Readonly<BacktrackSolverService>;

  tiles:Readonly<Tile>[];
  width:Array<number>;
  height:Array<number>;
  constructor(){}

  ngOnInit()
  {
    this.width = Array(this.world.Maze().width).fill(0);
    this.height = Array(this.world.Maze().height).fill(0);
  }
  GetTileAt(x:number,y:number) :Readonly<Tile>
  {
    return this.world.Maze().tiles[this.world.Maze().to1D(x,y)];
  }
  IsStart(x:number,y:number) : boolean
  {
    return this.world.startPos.Equals(this.GetTileAt(x,y).coordinate);
  }
  IsIndexed(x:number,y:number) : boolean
  {
    for (const p of this.solver.GetIndexedLocations())
    {
      if(p.Equals(this.GetTileAt(x,y).coordinate))
        return true;
    }
    return false;
  }
}
