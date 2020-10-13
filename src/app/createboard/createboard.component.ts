import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-createboard',
  templateUrl: './createboard.component.html',
  styleUrls: ['./createboard.component.scss']
})
export class CreateboardComponent implements OnInit {
  newBoard: Board = new Board();
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addBoard() {
    this.taskService.addBoard(this.newBoard).subscribe(data => {
      console.log(data);
    });
  }

}
