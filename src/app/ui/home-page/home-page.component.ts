import { GameService } from './../../services/game.service';
import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSimulationPaused:boolean = false;
  constructor(public meta:GameMetaService,public game:GameService) { }

  ngOnInit() {
  }
  Reset():void
  {
    this.game.Reset(this.meta.maze);
  }
  IsSimulationPaused():boolean
  {
    return this.isSimulationPaused;
  }
  Pause():void
  {
    this.isSimulationPaused = true;
  }
  Resume():void
  {
    this.isSimulationPaused = false;
  }
}
