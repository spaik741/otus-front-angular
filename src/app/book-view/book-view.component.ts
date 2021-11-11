import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CommentService} from "../service/comment.service";
import {Book} from "../models/Book";
import {Comment} from "../models/Comment";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book: Book

  comments: Comment[]

  constructor(private bookService: BookService,
              private commentService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((p: Params) => {
        if (p.id) {
          this.bookService.getBook(p.id).subscribe(b => {
            this.book = {
            id: b.id,
            name: b.name,
            author: b.author,
            genre: b.genre
          };
          });
        }
      }
    );
    this.route.queryParams.subscribe((p: Params) => {
        if (p.id) {
          // @ts-ignore
          this.commentService.getAllComment(p.id).subscribe(c => this.comments = c);
          // console.log('ID: ', p.id)
        }
      }
    );
  }

}
