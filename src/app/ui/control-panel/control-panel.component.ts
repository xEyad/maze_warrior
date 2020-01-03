import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
///responsible for setting graphical options of the world
export class ControlPanelComponent implements OnInit {

  width;
  height;
  constructor(public meta:GameMetaService)
  {
    this.width = meta.mazeWidth;
    this.height = meta.mazeHeight;
  }

  ngOnInit() {
  }
  CreateMaze()
  {
    this.meta.SetMazeDimensions(parseInt(this.width),parseInt(this.height));
  }
}
