import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../models/Author";
import {Genre} from "../models/Genre";
import {AuthorService} from "../service/author.service";
import {GenreService} from "../service/genre.service";
import {Book} from "../models/Book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  id: any
  name: string;
  author: Author;
  genre: Genre;

  message: string = '';

  authors: Author [];
  genres: Genre [];

  constructor(private authorService: AuthorService,
              private genreService: GenreService,
              private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.message = '';
    // @ts-ignore
    this.authorService.getAllAuthor().subscribe(authors => this.authors = authors);
    // @ts-ignore
    this.genreService.getAllGenre().subscribe(genres => this.genres = genres);
    this.route.queryParams.subscribe((p: Params) => {
        if (p.id) {
          this.bookService.getBook(p.id).subscribe(book => {
            this.id = book.id;
            this.name = book.name;
            this.author = book.author;
            this.genre = book.genre;
          })
        }
      }
    );

  }

  addBook() {
    if (this.name.trim()) {
      const book: Book = {
        id: this.id,
        name: this.name,
        author: this.author,
        genre: this.genre
      }
      this.bookService.createBook(book).subscribe(m => {
        if (m.id) {
          console.log('ID: ',m.id)
          this.message = 'Great! You book save!'
        }
      });
      console.log('Add new book:', book);

      // this.router.navigate( ['']);
    }
  }
}
