import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() resetSimulation = new EventEmitter<void>();
  @Output() pauseSimulation = new EventEmitter<void>();
  @Output() resumeSimulation = new EventEmitter<void>();
  constructor(public meta:GameMetaService)
  {

  }

  ngOnInit() {
  }
  ResetSimulation()
  {
    this.resetSimulation.emit();
    this.meta.Reset();
  }
  PauseSimulation()
  {
    this.pauseSimulation.emit();
    this.meta.PauseSimulation();
  }
  StartSimulation()
  {
    this.meta.StartSimulation();
    this.resumeSimulation.emit();
  }
}
