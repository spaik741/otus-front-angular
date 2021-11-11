import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/Book";
import {Author} from "../models/Author";

const AUTHOR_API = 'api/author/';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  getAllAuthor(): Observable<Author> {
    return this.http.get<Author>(AUTHOR_API + 'all');
  }


}
