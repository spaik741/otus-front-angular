import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  loginExecute() {
    this.authService.login(this.username, this.password).subscribe((resp: any) => {
      this.tokenStorageService.saveToken(resp.token);
    });
  }

  isSuccess() : boolean{
    return !!this.tokenStorageService.getToken();
  }

}
