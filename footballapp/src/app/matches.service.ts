import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

  getInPlay()
  {
    return this.http.get("http://localhost:300/inplay");
  }
}
