import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../local-storage.service';
import { Board } from '../models/board';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-boardslist',
  templateUrl: './boardslist.component.html',
  styleUrls: ['./boardslist.component.scss']
})
export class BoardslistComponent implements OnInit {
  boards: Board[] = []

  constructor(private taskService: TaskService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.taskService.getAllBoards().subscribe(data => {
      this.boards = data.boards;
    })
  }

  view(board: Board) {
    this.router.navigate(['boardview', board.id])
  }

  loggedIn() {
    return this.localStorageService.isLoggedIn();
  }
}
