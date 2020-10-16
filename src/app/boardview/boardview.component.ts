import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Board } from '../models/board';
import { BoardData } from '../models/board-data';
import { List } from '../models/list'
import { TaskService } from '../task.service';
@Component({
  selector: 'app-boardview',
  templateUrl: './boardview.component.html',
  styleUrls: ['./boardview.component.scss']
})
export class BoardviewComponent implements OnInit {
  board: Board = null;
  lists: List[] = [];
  constructor(private route: ActivatedRoute, private taskService: TaskService, private localStorageService: LocalStorageService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.taskService.getABoard(params.id).subscribe(boardData => {
          this.board = boardData.board
        })
        console.log(this.board)
      }
    });
  }
  loggedIn() {
    return this.localStorageService.isLoggedIn();
  }
}

// FIX ME SETH