import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BoardData } from './models/board-data';
import { Board } from './models/board';
import { List } from './models/list';

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

  addList(list: List) {
    return this.http.post(this.baseUrl + 'lists/create', list)
  }
}
