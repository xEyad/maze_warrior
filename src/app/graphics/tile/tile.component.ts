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


  Drag(event):void
  {
    let type;
    if(this.tile.isGoal)
      type = "goal";
    else if(this.tile.coordinate.Equals(this.meta.startPos))
      type = "start";
      event.dataTransfer.setData("tileType", type);
  }


  GetCssClass() : string
  {
    if(this.tile.isGoal)
      return "goal";
    else
      return this.tile.state;
  }
  AcceptDrop(event):void
  {

    event.preventDefault();
    let type = event.dataTransfer.getData("tileType");

    switch (type) {
      case 'goal':
        this.meta.goalPos = this.tile.coordinate;
        break;
      case 'start':
        this.meta.startPos = this.tile.coordinate;
        break;
      default:
        break;
    }
  }
  SetAllowDrop(event:Event):void
  {
    if(this.tile.state != State.blocked && !(this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos)))
      event.preventDefault();
  }
  IsDraggable():boolean
  {
    return this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos);
  }
  ToggleState():void
  {
    if(this.tile.state==State.open)
      this.Block();
    else
      this.Open();
  }
  private Open():void
  {
    this.tile.state = State.open;
  }
  private Block():void
  {
    if(!this.tile.isGoal && !this.meta.startPos.Equals(this.tile.coordinate))
      this.tile.state = State.blocked;
  }
}
