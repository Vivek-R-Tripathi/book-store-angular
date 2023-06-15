import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  name:string = '';
 
  childData(event:string)
  {
    this.name=event;
  }
}
