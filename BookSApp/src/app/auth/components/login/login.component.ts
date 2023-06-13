import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
constructor(private routes: ActivatedRoute) {
  
}

  ngOnInit(): void {
    this.routes.queryParams.subscribe((param)=> {
      console.log(param);
     this.name = param['name'];
//params
// : {name: 'vivek', email: 'sample'}

    })
  }

}
