import {Author} from "./Author";
import {Genre} from "./Genre";


export interface Book {
  id?: bigint
  name: string
  author: Author
  genre: Genre

}
