import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnChanges, OnInit {
 
  /**
   *
   */
  constructor() {
    console.log("This is inside Child Constructor");
    
  }
  ngOnInit(): void {
    console.log("This is inside Child NG-OnInit");
  }
  @Input() count ! :number;

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

  }
   

   }

