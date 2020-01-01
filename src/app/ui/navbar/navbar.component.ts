import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public meta:GameMetaService)
  {

  }

  ngOnInit() {
  }
  resetSimulation()
  {
    this.meta.isSimulationStopped = true;
  }
  pauseSimulation()
  {
    this.meta.isSimulationRunning = false;
  }
  startSimulation()
  {
    this.meta.isSimulationRunning = true;
  }
}
