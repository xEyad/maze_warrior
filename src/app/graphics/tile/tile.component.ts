import { State, Tile } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile : Tile;
  cssClass:string;
  constructor() { }

  ngOnInit()
  {
    this.cssClass = "nothing";
    if(this.tile.hasWalker)
      this.cssClass = "walker";
    else if(this.tile.isGoal)
      this.cssClass = "goal";
    else
      this.cssClass = this.tile.state;
  }

}
