import { World } from '../../models/world';
import { Tile } from '../../models/tile';
import { Component, OnInit, Input } from '@angular/core';
import { BacktrackSolverService } from 'src/app/services/backtrack-solver.service';

@Component({
  selector: 'gfx-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  @Input() world : Readonly<World>;
  @Input() solver:Readonly<BacktrackSolverService>;

  constructor(){}

  ngOnInit()
  {

  }

}
