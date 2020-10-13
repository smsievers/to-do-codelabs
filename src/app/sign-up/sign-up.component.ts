import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from './../user.service';
import { LocalStorageService } from './../local-storage.service'
import { Router } from '@angular/router';
import { User } from './../models/user';
import { NewUser } from '../models/new-user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    
  }
  submitUser() {
    console.log(this.formGroup.value);
    const newUser = new NewUser(this.formGroup.value)
    this.userService.signup(newUser).subscribe((data: User) => {
      console.log(data);
      this.localStorageService.saveUser(data);
      this.router.navigateByUrl('');
    });
  }

}
