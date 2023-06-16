import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor() {
    console.log("This is inside Parent Constructor");
    
  }
  ngOnInit(): void {
    console.log("This is inside Parent NG-OnInit");
  }

  count:number = 0;

  // When there is change in count i.e, the input property the onchange method got execute with 3 values current, previous 
  public incounter():void {

    this.count++;
  }

}
