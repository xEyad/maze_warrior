import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-maze-construction',
  templateUrl: './maze-construction.component.html',
  styleUrls: ['./maze-construction.component.scss']
})
export class MazeConstructionComponent implements OnInit {

  constructor(public meta:GameMetaService) { }

  ngOnInit() {
  }

}
