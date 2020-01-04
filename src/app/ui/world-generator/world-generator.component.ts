import { Maze } from './../../models/maze';
import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-world-generator',
  templateUrl: './world-generator.component.html',
  styleUrls: ['./world-generator.component.scss']
})
export class WorldGeneratorComponent implements OnInit {

  isLeftMouseBtnClicked = false;
  constructor(public meta:GameMetaService)
  {
  }

  ngOnInit() {
  }

  DraggingMode(event:Event):void
  {
    this.isLeftMouseBtnClicked = false;
  }
  ToggleTileState(event:Event):void
  {
    event.target.dispatchEvent(new Event('toggleTile', { bubbles: true }));
  }
  BlockTile(event:Event):void
  {
    if(this.isLeftMouseBtnClicked)
      event.target.dispatchEvent(new Event('blockTile', { bubbles: true }));
  }
}
