import { GameService } from './../services/game.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { BacktrackSolverService } from '../services/backtrack-solver.service';

@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {

  constructor(public game:GameService,public solver:BacktrackSolverService)
  {
    solver.SolveInSteps();
  }
  ngOnInit()
  {

  }
}

