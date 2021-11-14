import { GameMetaService } from './../../services/game-meta.service';
import { Point } from './../../models/utility/point';
import { Maze } from './../../models/maze';
import { Tile } from './../../models/tile';
import { TileMark,Mark } from './../../models/TileMark';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit {

  @Input() maze:Readonly<Maze>;
  @Input() TileMarks:Readonly<TileMark>[];
  widthArr:Array<number>;
  heightArr:Array<number>;
  constructor(public meta:GameMetaService)
  {
    if(this.TileMarks == undefined)
      this.TileMarks = [];
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

  GetMarkAt(x:number,y:number) : Readonly<Mark>
  {
    if(this.TileMarks.length==0)
      return Mark.none;
    for (const tileMark of this.TileMarks)
    {
      if(tileMark.location.Equals(this.GetTileAt(x,y).coordinate))
        return tileMark.type;
    }
  }

  TileDimensionsStyle()
  {
    return {
      'width': this.meta.tileSize.toString()+"px",
      'height': this.meta.tileSize.toString()+"px",
    }
  }
}
