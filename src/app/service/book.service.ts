import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Book} from "../models/Book";

const BOOK_API = 'api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }


  getAllBook(): Observable<Book> {
    return this.http.get<Book>(BOOK_API);
  }

  getBook(id: any): Observable<Book> {
    return this.http.get<Book>(BOOK_API + '/' + id);
  }

  createBook(book: Book): Observable<any> {
    console.log(book);
    return this.http.post(BOOK_API, book);
  }

  deleteBook(id: number) {
    console.log('Delete book id:', id, BOOK_API + id);
    return this.http.delete(BOOK_API + '/' + id);
  }

}
