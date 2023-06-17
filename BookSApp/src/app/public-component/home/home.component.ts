import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AuthorModel } from 'src/app/shared/components/AuthorModel/Author.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild('btn_counter')
  btnAfter!: ElementRef;
  public address:string ='India';

  public namee: string ='';

  constructor() {
    console.log("This is inside Parent Constructor");
    
  }

  //It will load the data after view getting loaded
  ngAfterViewInit(): void {
    console.log(`${this.btnAfter}after view init call takes place`);
    //Here it will updated the name of button from hardcoded to UPDAEEEEEEEEEEE after view getting loaded
     this.btnAfter.nativeElement.innerHTML ='UPDAEEEEEEEEEEE';
  }
  ngOnInit(): void {
    console.log("This is inside Parent NG-OnInit");
    
  }
  
  public authModel:AuthorModel = {AuthorId:23,AuthorName:"Vivek Ram Tripathi"}
  count:number = 0;

  // When there is change in count i.e, the input property the onchange method got execute with 3 values current, previous 
  public incounter():void {
    this.count++;
    //we r up updating existing reference of an object the ng on changes will not detect this changes 
    this.authModel.AuthorId = 34;
    //Now in this sceanrio we are again newly instanciate the AuthModel so it ngOnChnage will detect their value
   // this.authModel ={AuthorId:667,AuthorName:"Lalu"}\\

   this.address =this.address + this.count;
  }

}
