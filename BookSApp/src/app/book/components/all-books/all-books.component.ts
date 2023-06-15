import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../BookModel/book.Model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

 public bookDetails:BookModel[] =[];
  /**
   *
   */
  constructor(private bookService:BookService) {
    
  }
  ngOnInit(): void {
    
    this.bookDetails = this.bookService.getAllBook()

    console.log(this.bookDetails)
  }
}
