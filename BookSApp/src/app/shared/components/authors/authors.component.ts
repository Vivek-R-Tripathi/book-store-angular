import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../AuthorModel/Author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnChanges, OnInit, DoCheck {
 
  /**
   *
   */
  constructor() {
    console.log("This is inside Child Constructor");
    
  }
  ngDoCheck(): void {
    // Here it will detect the changes from Updated value with same referece from CounterMethod in Parent
    console.log(this.authModel);
  }
  ngOnInit(): void {
    console.log("This is inside Child NG-OnInit");
  }
  @Input() count ! :number;

  @Input()
  authModel!: AuthorModel;

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

  }
   

   }

