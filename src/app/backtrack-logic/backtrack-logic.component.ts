import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtrack-logic',
  templateUrl: './backtrack-logic.component.html',
  styleUrls: ['./backtrack-logic.component.scss']
})
export class BacktrackLogicComponent implements OnInit {

  //0=open , 1=blocked , 2=goal
  maze = [
    [0,0,0,0],
    [0,1,1,1],
    [0,0,0,0],
    [0,1,0,1],
    [0,1,0,2]
  ];
  constructor() { }

  ngOnInit() {
  }

}
enum state
{
  open,
  goal,
  blok
}
