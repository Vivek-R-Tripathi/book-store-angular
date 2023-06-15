import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  public data: number | undefined



  public fullName !: string;

  public name1 !: string;

  public setData(value:number):void{
   this.data=value;
  }

  public fullNames(value:string):void{
     this.fullName=value
   }

  

  // @Input() data: string | undefined;
}
