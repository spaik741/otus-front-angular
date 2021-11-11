import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/Comment";

const COMMENT_API = 'api/comment/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAllComment(id: any): Observable<Comment> {
    return this.http.get<Comment>(COMMENT_API + 'all/' + id);
  }
}
