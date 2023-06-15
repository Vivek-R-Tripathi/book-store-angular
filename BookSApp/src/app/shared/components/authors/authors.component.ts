import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
   
  //This data i am sending 
  //first step : Implement child comp @output and event emitter
  //Now go to pareent (type of @Output)=(receive data in event parameter)
  name:string= "vivek tripathi" 

  @Output() data1 = new EventEmitter<string>();

  btn_Click(): void {
  this.data1.emit(this.name);
  }

   }

