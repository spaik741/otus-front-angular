import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/Book";
import {Author} from "../models/Author";

const AUTH_API = 'api/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post(AUTH_API, {username: username, password: password});
  }


}
