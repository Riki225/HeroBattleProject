import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from '../model/hero';
import { villain } from '../model/villain';
import { games } from '../model/games';

//const httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiURL = "http://localhost:5000/"

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(heroCount: number): Observable<hero[]> {
    return this.http.get<hero[]>(`${this.apiURL}Hero`);
  }

  getVillains(villainCount: number): Observable<villain[]> {
    return this.http.get<villain[]>(`${this.apiURL}Villain`);
  }
  getGames(): Observable<games[]> {
    return this.http.get<games[]>(`${this.apiURL}AllGameResults`);
  }

  addGameResults(gameResults: games) {
  return this.http.post(`${this.apiURL}AddGameResults`, gameResults);
  }
}
