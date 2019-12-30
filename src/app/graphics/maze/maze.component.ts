import { World } from './../../models/world';
import { Tile } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';
import { Maze } from 'src/app/models/maze';

@Component({
  selector: 'gfx-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit {

  @Input() world : Readonly<World>;
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
}
