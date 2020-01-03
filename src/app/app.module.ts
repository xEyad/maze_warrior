import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { GameMetaService } from './services/game-meta.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacktrackLogicComponent } from './backtrack-logic/backtrack-logic.component';
import { GameService } from './services/game.service';
import { TileComponent } from './graphics/tile/tile.component';
import { MarkComponent } from './graphics/mark/mark.component';
import { WorldComponent } from './graphics/world/world.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ControlPanelComponent } from './ui/control-panel/control-panel.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { WorldGeneratorComponent } from './ui/world-generator/world-generator.component';
import { MazeComponent } from './graphics/maze/maze.component';

@NgModule({
  declarations: [
    AppComponent,
    BacktrackLogicComponent,
    TileComponent,
    MarkComponent,
    WorldComponent,
    ControlPanelComponent,
    HomePageComponent,
    NavbarComponent,
    WorldGeneratorComponent,
    MazeComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GameService,GameMetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
