import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';

const routes= [
  // Added AuthComponent because it itself have multiple component

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
