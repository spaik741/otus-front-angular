import {Book} from "./Book";

export interface Comment {
  id?: bigint
  message: string
  messageDate: Date
  book: Book
}
