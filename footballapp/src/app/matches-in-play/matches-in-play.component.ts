import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-in-play',
  templateUrl: './matches-in-play.component.html',
  styleUrls: ['./matches-in-play.component.css']
})
export class MatchesInPlayComponent implements OnInit{

  matches: any[] = [];
  constructor(private _matchesservice: MatchesService)
  {
  }
  ngOnInit(): void {
    this._matchesservice.getInPlay().subscribe((data:any) => {
      this.matches = data.matches;
    });
  }
}
