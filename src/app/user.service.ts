import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { NewUser } from './models/new-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  signup(newUser: NewUser) {
    return this.http.post(this.baseUrl + 'users/create', newUser);
  }

  signin(user: NewUser): Observable<User> {
    return this.http.post<User>(this.baseUrl + "users/login", user);
  }
}
