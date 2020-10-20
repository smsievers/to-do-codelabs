import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { List } from '../models/list';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Board } from '../models/board';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.scss']
})
export class CreatelistComponent implements OnInit {
  board: Board = null;
  boardId: number;
  formGroup = new FormGroup({
    title: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute, private taskService: TaskService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      if (params.id) {
        this.taskService.getABoard(params.id).subscribe(data => {
          this.board = data
    
        });
      }
    })
  }

  addList() {
    console.log(this.board.title);
    console.log(this.formGroup.value)
    const newList = new List(this.formGroup.value);
    newList.board_id = this.board.id
    this.taskService.addList(newList).subscribe((data: List) => {
      localStorage.setItem('title', data.title);
      console.log(newList.title);
    });
  }

}
