import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Board } from '../models/board';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-createboard',
  templateUrl: './createboard.component.html',
  styleUrls: ['./createboard.component.scss']
})
export class CreateboardComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl('', Validators.required)
  });
  constructor(private taskService: TaskService, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  addBoard() {
    console.log(this.formGroup.value);
    const newBoard = new Board(this.formGroup.value)
    this.taskService.addBoard(newBoard).subscribe((data: Board) => {
      localStorage.setItem('title', data.title);
    })
    this.router.navigate(['boards'])
  }

}
