import { TileMark } from './../../models/TileMark';
import { World } from '../../models/world';
import { Component, OnInit, Input } from '@angular/core';
import { BacktrackSolver } from 'src/app/models/solvers/backtrack-solver';

@Component({
  selector: 'gfx-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  @Input() world : Readonly<World>;
  @Input() solver:Readonly<BacktrackSolver>;
  constructor(){}

  ngOnInit()
  {

  }

  GetIndexedLocations() : Readonly<TileMark[]>
  {
    let marksArray:TileMark[] = [];
    for (const loc of this.solver.GetIndexedLocations())
      {
        marksArray.push(TileMark.indexed(loc));
      }
    return marksArray;
  }
}
