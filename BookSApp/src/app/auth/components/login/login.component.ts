import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit{

  name:string="";
  email:string="";
/**
 *
 */
constructor(private routes: ActivatedRoute, private router:Router) {
  
}

  ngOnInit(): void {
    this.routes.queryParams.subscribe((param)=> {
      console.log(param);
     this.name = param['name'];
//params
// : {name: 'vivek', email: 'sample'}

    })
  }

  goToSignUp(): void{

  this.router.navigate(['/auth/signup']);

  }

  goToSignUpWithParameter(id: number): void{

      // if some part of para meter are fixed then used as id 
      // if not then we can use in this ''

    //this.router.navigate(['/public/book-details',id]);

    //with query param
    this.router.navigate(['/public/book-details',id], {queryParams:{name:'vivek', email:'sample@gmail.com'}});

    // --output =http://localhost:4200/public/book-details/22?name=vivek
  
    }

}
