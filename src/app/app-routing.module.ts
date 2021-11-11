import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookFormComponent} from "./book-form/book-form.component";
import {BookViewComponent} from "./book-view/book-view.component";

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'edit', component: BookFormComponent},
  {path: 'view', component: BookViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
