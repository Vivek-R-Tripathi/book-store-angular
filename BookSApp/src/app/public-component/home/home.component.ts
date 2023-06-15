import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements AfterViewInit{
 
  fullName:string='';
  
  @ViewChild(AuthorsComponent)
  private childAuthur!: AuthorsComponent;

  //Using ths @viewchild we make changes on the mat-material properties as well
  @ViewChild('counterBtn')
  private counterBtn!: MatButton;
  name1:string="X-man";

  // we can use this to update some property related to the native element of the html
  @ViewChild('title')
  private title !: ElementRef;

  ngAfterViewInit(): void {
  setTimeout(() => {
    this.childAuthur.setData(2);
    this.childAuthur.fullNames("Vivek Ram Tripathi");
    this.childAuthur.name1 =this.name1;
    this.counterBtn.color = 'primary';
    this.counterBtn.disabled = true;
    // we can console this native element and can use according to the requirement
    this.title.nativeElement.innerHTML ='This is my updated Title';
  }, 0);
   
  }
}
