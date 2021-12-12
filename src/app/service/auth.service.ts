import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/Book";
import {Author} from "../models/Author";
import {Router} from "@angular/router";

const AUTH_API = 'api/auth/login';
// const AUTH_API = 'http://localhost:8080/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) {
  }


  login(username: string, password: string): Observable<any> {
    console.log('Username and password: ', username, password)
    return this.http.post(AUTH_API, {
      username: username,
      password: password});

  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
