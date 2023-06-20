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

  public errorMessage!: string;

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
    console.log(this.formObj.get('title'));

    // I have one requirement where i need to see the whatever i am typing in the input need to 
    //captured in ts file use can use the below concept.
    const titleObj=this.formObj.get('title');
    titleObj?.valueChanges.subscribe((x)=>{
      console.log(x);
      this.validateControl(titleObj as FormControl)

    })
  }

  private validateControl(titleControl: FormControl):void{
    this.errorMessage='';
    if(titleControl.errors &&(titleControl.touched ||titleControl.dirty)){
      if(titleControl.errors['required']){
        this.errorMessage='Please enter valid title';
      }
      else if(titleControl.errors['required']){
        this.errorMessage='Minimum length shd be 1 to 10';
      }
    }
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

  UpdateFormValue():void{
    //this patchvalue(it update partial form object) and setValue(it update full formobject) is use for update reactive form field
    this.formObj.patchValue({
      title:'VIVEK',
      author:'shakespear'
    })
  }
   
}
