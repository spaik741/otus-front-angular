import {Author} from "./Author";
import {Genre} from "./Genre";


export interface Book {
  id?: any
  name: string
  author: Author
  genre: Genre

}
