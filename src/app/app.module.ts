import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacktrackLogicComponent } from './backtrack-logic/backtrack-logic.component';
import { GameService } from './services/game.service';
import { TileComponent } from './graphics/tile/tile.component';
import { MarkComponent } from './graphics/mark/mark.component';
import { WorldComponent } from './graphics/world/world.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    BacktrackLogicComponent,
    TileComponent,
    MarkComponent,
    WorldComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
