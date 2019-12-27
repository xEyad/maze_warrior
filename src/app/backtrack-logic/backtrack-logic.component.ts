import { GameService } from './../services/game.service';
import { World } from './../models/world';
import { Maze } from './../models/maze';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {


  constructor(public gameService:GameService)
  {
    gameService.StartGameLoop();
  }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.gameService.MoveWalker(event, 'keydown');
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
    // this.gameService.MoveWalker(event, 'keyup');
  }
  ngOnInit()
  {

  }
}

