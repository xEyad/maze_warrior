import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  @Input() isStart: boolean = false;
  @Input() isIndexed:boolean = false;
  constructor() { }

  ngOnInit()   {
  }

  GetCssClass():string
  {
    if(this.isStart)
      return "startPos";
    if(this.isIndexed)
      return "indexed";
  }
}
