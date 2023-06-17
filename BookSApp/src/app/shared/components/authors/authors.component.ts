import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../AuthorModel/Author.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnChanges, OnInit, DoCheck,AfterContentInit{
 
  /**
   *
   */

  public count1:number = 0;
  constructor() {
    console.log("This is inside Child Constructor");
  }
 


  // this will run every time the ng-content value get updated
  ngAfterContentChecked(): void { 
  console.log("Inside the content checked "+ this.authAddress?.address);
  }

  //this will run only onces when ng-content value get changed at first time
  ngAfterContentInit(): void {
  console.log("Inside the content init "+ this.authAddress?.address);
  }
  ngDoCheck(): void {
  // Here it will detect the changes from Updated value with same referece from CounterMethod in Parent
  console.log(this.authModel);
  }
  ngOnInit(): void {
    console.log("This is inside Child NG-OnInit");
  }

  @ContentChild(AuthorAddressComponent)
  authAddress!: AuthorAddressComponent;

  @Input() count ! :number;

  @Input()
  authModel!: AuthorModel;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  Clickme(): void {
    this.count1++;
  }
  }

