import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacktrackLogicComponent } from './backtrack-logic/backtrack-logic.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BacktrackLogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
