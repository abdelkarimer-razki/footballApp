import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesService } from './matches.service';
import { MatchesInPlayComponent } from './matches-in-play/matches-in-play.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchBarComponent } from './match-bar/match-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesInPlayComponent,
    MatchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
