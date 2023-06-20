import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../../BookModel/book.Model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  prices: any[] = [
    {value: 100, viewValue: '$ 100'},
    {value: 200, viewValue: '$ 200'},
    {value: 300, viewValue: '$ 300'},
  ];

  currencies: any[] = [
    {value: 'USD', viewValue: 'US Dollar'},
    {value: 'INR', viewValue: 'Indian Rupee'},
    
  ];

  public formObj!: FormGroup;

  /**
   *
   */
  constructor(private bookService:BookService) {
  
    
  }
  ngOnInit(): void {
    this.formInit();
  }

  private formInit():void{
    this.formObj = new FormGroup({
      title:new FormControl('', [Validators.required,Validators.minLength(10)]),
      author: new FormControl(),
      pages: new FormControl(),
      language: new FormControl(),
      price: new FormGroup({
        value:new FormControl(),
        currency:new FormControl()
      }),
      isPublished: new FormControl(),
      publisheddate: new FormControl()
    });
  
  }
  saveBook():void{
    console.log(this.formObj);
   this.bookService.addBooks(this.formObj.value);

  }
   
}
