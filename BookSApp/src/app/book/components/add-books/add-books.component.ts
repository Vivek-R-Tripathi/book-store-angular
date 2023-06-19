import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../BookModel/book.Model';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent {

  /**
   *
   */
  constructor(private bookService:BookService) {
    
  }

  addBook(bookModel:any): void{
    const book: BookModel = new BookModel();
    
      book.author = bookModel.author;
      book.title = bookModel.title;
      book.pages = bookModel.pages;
      book.language = bookModel.language;
      book.price = {

        currency: "$",
        value:bookModel.price

      }
    
   this.bookService.addBooks(book);
   console.log(bookModel);

  }
  
}
