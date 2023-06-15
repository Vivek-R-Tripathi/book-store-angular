import { Component, Input } from '@angular/core';
import { BookModel } from '../../BookModel/book.Model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

 @Input()
  books!: BookModel[];
}
