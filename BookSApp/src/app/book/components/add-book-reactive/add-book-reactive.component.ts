import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../../BookModel/book.Model';
import { BookService } from '../../services/book.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
  constructor(private bookService:BookService, private formBuilder:FormBuilder) {
  
    
  }
  ngOnInit(): void {
    this.formInit();
    console.log(this.formObj.get('title'));

    console.log(this.formObj);

    // I have one requirement where i need to see the whatever i am typing in the input need to 
    //captured in ts file use can use the below concept.
    const titleObj=this.formObj.get('title');
    titleObj?.valueChanges.subscribe((x)=>{
      console.log(x);
      this.validateControl(titleObj as FormControl)

    })

    const titleControl=this.formObj.get('formatType');
    titleControl?.valueChanges.subscribe((x)=>{
      console.log(x);
      this.formatTypeChange(x);

    })
  }

  public get authors() {
   return <FormArray>this.formObj.get('authors')
  }
  private formatTypeChange(formatType:string):void{
    const pdfControl = this.formObj.get('pdfType');
    const docControl = this.formObj.get('docType');

    if(formatType==='pdf')
    {
       pdfControl?.addValidators(Validators.required);
       docControl?.clearValidators();
    }
    else if(formatType==='doc')
    {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

   pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

  private validateControl(titleControl: FormControl):void{
    this.errorMessage='';
    if(titleControl.errors && (titleControl.touched ||titleControl.dirty)){
      if(titleControl.errors['required']){
        this.errorMessage='Please enter valid title';
      }
      else if(titleControl.errors['minlength']){
        this.errorMessage='Minimum length shd be 1 to 10';
      }

    }
  }
  private formInit():void{
    this.formObj = this.formBuilder.group({
      title: ['this is my title', Validators.required],
     // author:'',
      pages: '',
      language: '',
      price: this.formBuilder.group({
        value: '',
        currency:''
      }),
      isPublished: '',
      publisheddate: '',
      formatType:'',
      pdfType: '',
      docType: '',
      authors: this.formBuilder.array([
        this.getAuthorControl(), this.getAuthorControl()
      ])
    });
  
  }

  public AddMore(){
  this.authors.push(this.getAuthorControl())
  }

  public RemoveAuthor(i:number)
  {
    this.authors.removeAt(i)
  }

  private getAuthorControl(): FormGroup{

     return this.formBuilder.group({
      fullName: ''
    });
  }
  saveBook():void{
    console.log(this.formObj);
   this.bookService.addBooks(this.formObj.value).subscribe((data)=>{

    console.log(data, 'Save Data');
    // if(data != null){
    //  alert("Data added successfully")
    // }
     
   });

  }

  UpdateFormValue():void{
    //this patchvalue(it update partial form object) and setValue(it update full formobject) is use for update reactive form field
    this.formObj.patchValue({
      title:'VIVEK',
      author:'shakespear'
    })
  }
   
}
