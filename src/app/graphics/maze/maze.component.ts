import { GameMetaService } from './../../services/game-meta.service';
import { Point } from './../../models/utility/point';
import { Maze } from './../../models/maze';
import { Tile } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit {

  @Input() maze:Readonly<Maze>;
  @Input() indexedLocations:Readonly<Point>[]; //SHOULD CHANGE TO MARKS ARRAY
  widthArr:Array<number>;
  heightArr:Array<number>;
  constructor(public meta:GameMetaService)
  {
    if(this.indexedLocations == undefined)
      this.indexedLocations = [];
  }

  ngOnInit()
  {
    this.widthArr = Array(this.maze.width).fill(0);
    this.heightArr = Array(this.maze.height).fill(0);
  }
  mazeHeight() :Array<number>
  {
    if(this.heightArr.length == this.maze.height)
      return this.heightArr;
    this.heightArr = Array(this.maze.height).fill(0);
    return this.heightArr;
  }
  mazeWidth() :Array<number>
  {
    if(this.widthArr.length == this.maze.width)
      return this.widthArr;
    this.widthArr = Array(this.maze.width).fill(0);
    return this.widthArr;
  }
  GetTileAt(x:number,y:number) :Readonly<Tile>
  {
    return this.maze.tiles[this.maze.to1D(x,y)];
  }
  IsStart(x:number,y:number) : boolean
  {
    return this.maze.startTile.coordinate.Equals(this.GetTileAt(x,y).coordinate);
  }
  IsIndexed(x:number,y:number) : boolean
  {
    for (const p of this.indexedLocations)
    {
      if(p.Equals(this.GetTileAt(x,y).coordinate))
        return true;
    }
    return false;
  }
  TileDimensionsStyle()
  {
    return {
      'width': this.meta.tileSize.toString()+"px",
      'height': this.meta.tileSize.toString()+"px",
    }
  }
}
