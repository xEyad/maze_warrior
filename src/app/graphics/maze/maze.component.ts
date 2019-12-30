import { Tile } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';
import { Maze } from 'src/app/models/maze';

@Component({
  selector: 'gfx-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit {

  @Input() maze : Readonly<Maze>;
  tiles:Readonly<Tile>[];
  width:Array<number>;
  height:Array<number>;
  constructor(){}

  ngOnInit()
  {
    this.width = Array(this.maze.width).fill(0);
    this.height = Array(this.maze.height).fill(0);
  }
  GetTileAt(x:number,y:number) :Readonly<Tile>
  {
    return this.maze.tiles[this.maze.to1D(x,y)];
  }
}
