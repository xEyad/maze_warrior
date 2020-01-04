import { GameMetaService } from './../services/game-meta.service';
import { GameService } from './../services/game.service';
import { Component, OnInit, Input } from '@angular/core';
import { BacktrackSolver } from '../models/solvers/backtrack-solver';



@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {

  @Input() pauseSolving:boolean;
  solver:BacktrackSolver;
  constructor(public game:GameService,public meta:GameMetaService)
  {
    this.solver = new BacktrackSolver(game,meta.simulationSpeed);
    this.solver.SolveInSteps();
  }
  ngOnInit()
  {

  }
  ngDoCheck()
  {
    this.pauseSolving? this.solver.PauseSolving() : this.solver.ResumeSolving();
  }
  ngOnDestroy()
  {
    this.solver.StopSolving();
  }
}

