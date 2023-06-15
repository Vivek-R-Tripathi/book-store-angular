import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  public data: number | undefined

  public setData(value:number):void{
   this.data=value;
  }

  // @Input() data: string | undefined;
}
