import { GameMetaService } from './../../services/game-meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public meta:GameMetaService) { }

  ngOnInit() {
  }

}
