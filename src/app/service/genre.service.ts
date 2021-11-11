import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/Author";
import {Genre} from "../models/Genre";

const GENRE_API = 'api/genre/';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {
  }

  getAllGenre(): Observable<Genre> {
    return this.http.get<Genre>(GENRE_API + 'all');
  }
}
