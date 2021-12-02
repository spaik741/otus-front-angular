import {Component} from '@angular/core';
import {TokenStorageService} from "./service/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otus-front-angular';

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  authenticationRout() {
    this.router.navigate(['auth']);
  }

  logout() {
    this.tokenStorageService.logOut();
  }
}
