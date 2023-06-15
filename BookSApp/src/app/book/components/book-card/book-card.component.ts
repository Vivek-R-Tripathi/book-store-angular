import { Component, Input } from '@angular/core';
import { BookModel } from '../../BookModel/book.Model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

//Getter and setting concept is used for updation oject values through out application!!
//If we want to used the certain data to be added throughly in applicaion then we can use concept of getter setter!!
 @Input()
  //books!: BookModel[];

  get books(): BookModel[]{
    return this._books
  }

  set books(books: BookModel[])
  {
    books.map(x=>x.title = 'Title:' +x.title)
    this._books = books;
  }

  private _books!: BookModel[];
}
