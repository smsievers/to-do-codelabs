import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BoardData } from './models/board-data';
import { Board } from './models/board';

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
}
