import { Mark } from './../../models/TileMark';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gfx-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  @Input() mark:Mark = Mark.none;

  constructor() { }

  ngOnInit()   {
  }

  GetCssClass():string
  {
    if(Mark.start == this.mark)
      return "startPos";
    if(Mark.indexed == this.mark)
      return "indexed";
    return "";
  }
}
