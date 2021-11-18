import {Book} from "./Book";

export interface Comment {
  id?: any
  message: string
  messageDate: Date
  book: Book
}
