import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../BookModel/book.Model';
import { PriceModel } from '../../BookModel/price.Model';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit{

  /**
   *
   */
  public model!: BookModel;
  constructor(private bookService:BookService) {
    
  }
  ngOnInit(): void {
    this.model = new BookModel();
    this.model.author ='Book';
    this.model.title = 'The Psycology of Money';
    this.model.pages = 100;
    this.model.language ='Hindi';
    this.model.price = {value:20,currency:'USD'};
    this.model.isPublished = true;
    this.model.publisheddate = new Date();
  }

  

  prices: any[] = [
    {value: 100, viewValue: '$ 100'},
    {value: 200, viewValue: '$ 200'},
    {value: 300, viewValue: '$ 300'},
  ];

  addBook(bookModel:any): void{
    const book: BookModel = new BookModel();
    
      book.author = bookModel.author;
      book.title = bookModel.title;
      book.pages = bookModel.pages;
      book.language = bookModel.language;
      book.price = {

        currency: "$",
        value:bookModel.price

      };
      book.isPublished = bookModel.isPublished;
      book.publisheddate = bookModel.publisheddate;
    
   this.bookService.addBooks(book);
   console.log(bookModel);

  }
  
}
