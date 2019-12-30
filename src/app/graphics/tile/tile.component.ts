import { Tile } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile : Readonly<Tile>;
  constructor() { }

  ngOnInit()
  {
  }
  GetCssClass() : string
  {
    if(this.tile.isGoal)
      return "goal";
    else
      return this.tile.state;
  }
}
