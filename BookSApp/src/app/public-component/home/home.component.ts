import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AuthComponent } from 'src/app/auth/auth/auth.component';
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
  name1:string="X-man";

  ngAfterViewInit(): void {
  setTimeout(() => {
    this.childAuthur.setData(2);
    this.childAuthur.fullNames("Vivek Ram Tripathi");
    this.childAuthur.name1 =this.name1;
  }, 0);
   
  }
}
