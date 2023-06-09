import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthorModel } from 'src/app/shared/components/AuthorModel/Author.model';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit,AfterViewChecked, OnDestroy{

  @ViewChild('btn_counter')
  btnAfter!: ElementRef;

  @ViewChild(AuthorsComponent)
  authcomp!: AuthorsComponent;

  public address:string ='India';

  public time:any;
  public namee: string ='';

  constructor() {
    console.log("This is inside Parent Constructor");
    
  }
  //we can use this method in oder to unsubscribe an observables and call timeout method in it
  ngOnDestroy(): void {
    //moving other component it destroy the object of the first two component
    clearInterval(this.time);
    console.log('destroy the Home component');
  }

  //it will detect change from child after the view 
  ngAfterViewChecked(): void {
    console.log(this.authcomp.count1);
  }
  //It will load the data after view getting loaded
  ngAfterViewInit(): void {
    console.log(this.btnAfter + 'after view init call takes place');
    //Here it will updated the name of button from hardcoded to UPDAEEEEEEEEEEE after view getting loaded
     this.btnAfter.nativeElement.innerHTML ='UPDAEEEEEEEEEEE';
  }
  ngOnInit(): void {
    console.log('This is inside Parent NG-OnInit');
    this.timer();
  }
  
  public authModel:AuthorModel = {AuthorId:23,AuthorName:"Vivek Ram Tripathi"}
  count:number = 0;

  timer():void{
    this.time=setInterval(()=>{
      this.count++;
      console.log(this.count)
    },1000);
  }

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
