import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameMetaService
{
  readonly tileSize = 20;
  simulationSpeed = 10;
  mazeWidth = 40;
  mazeHeight = 50;
  isSimulationRunning = false;
  isSimulationStopped = false;
  constructor() { }
}
