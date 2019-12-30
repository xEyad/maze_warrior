import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  @Input() isStart: boolean = false;
  cssClass:string = "";
  constructor() { }

  ngOnInit() {

    if(this.isStart)
      this.cssClass = "startPos";
  }

}
