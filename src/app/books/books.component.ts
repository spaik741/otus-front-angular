import { Component, OnInit } from '@angular/core';
import {Book} from "../models/Book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book []

  book: Book

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    // @ts-ignore
    this.bookService.getAllBook().subscribe(books => this.books = books);
  }


  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe();
    this.getAllBooks();
    window.location.reload();
  }

  editBook(id: any) {
    this.router.navigate( ['edit'], {
      queryParams: {id: id}
    });
  }

  viewBook(id: any) {
    this.router.navigate( ['view'], {
      queryParams: {id: id}
    });
  }
}
