import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-codelabs';
  signedIn = false;
  username = '';
  closeResult = '';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
      if(data) {
        this.signedIn = true;
        this.username = data.username;
      } else {
        this.signedIn = false;
      }
    });
  }
  
  logout() {
    this.localStorageService.logoutUser()
  }
}
