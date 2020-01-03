import { GameMetaService } from './../../services/game-meta.service';
import { Tile, State } from './../../models/tile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile : Tile;

  constructor(public meta:GameMetaService) { }

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

  Open():void
  {
    this.tile.state = State.open;
  }
  ToggleState():void
  {
    if(this.tile.state==State.open)
      this.Block();
    else
      this.Open();
  }
  Block():void
  {
    this.tile.state = State.blocked;
  }
}
