import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BoardData } from './models/board-data';
import { Board } from './models/board';
import { ListData } from './models/list-data';
import { List } from './models/list';
import { Card } from './models/card';
import { CardData } from './models/card-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { 
  }

  getAllBoards(): Observable<BoardData> {
    return this.http.get<BoardData>(this.baseUrl + "boards/index");
  }

  getABoard(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "boards/show?id=" + id);
  }

  addBoard(board: Board) {
    return this.http.post(this.baseUrl + 'boards/create', board);
  }

  getAllLists(): Observable<ListData> {
    return this.http.get<ListData>(this.baseUrl + "lists/index");
  }

  getAList(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "lists/show?id=" + id);
  }

  addList(list: List) {
    return this.http.post(this.baseUrl + 'lists/create', list);
  }

  getAllCardss(): Observable<CardData> {
    return this.http.get<CardData>(this.baseUrl + "lists/index");
  }

  getACard(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "cards/show?id=" + id);
  }

  addCard(card: Card) {
    return this.http.post(this.baseUrl + 'cards/create', card);
  }
}
