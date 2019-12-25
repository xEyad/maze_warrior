import { World } from './../models/world';
import { Maze } from './../models/maze';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {


  constructor()
  {
    let w = new World();
    w.Draw();
  }

  ngOnInit()
  {

  }
}

