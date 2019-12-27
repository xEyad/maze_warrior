import { GameService } from './../services/game.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { BacktrackSolverService } from '../services/backtrack-solver.service';
import { Dir } from '../models/walker';

@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {


  constructor(public game:GameService,public solver:BacktrackSolverService)
  {
    solver.SolveGame();
  }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.game.MoveWalkerByKbd(event);
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
    // this.game.MoveWalker(event, 'keyup');
  }
  ngOnInit()
  {

  }
}

