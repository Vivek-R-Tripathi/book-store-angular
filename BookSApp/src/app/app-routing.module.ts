import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SignupComponent } from './auth/components/signup/signup.component';

const routes: Routes = [{ path: 'about-us', component: AboutUsComponent },
{ path: 'how-it-works', component: HowItWorksComponent },
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
