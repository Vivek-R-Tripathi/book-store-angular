import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public-component/about-us/about-us.component';
import { HowItWorksComponent } from './public-component/how-it-works/how-it-works.component';
import { NotfoundPageComponent } from './shared/notfound-page.component';
import { AuthComponent } from './auth/auth/auth.component';
import { UsersComponent } from './user/users.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './public-component/home/home.component';


const routes: Routes = [
///we can redirect bidefault to a specific routes
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  //Lazy loading only load those modules that required
  { path: 'auth', component: AuthComponent, loadChildren:()=> {
  return import('./auth/auth.module').then(x=>x.AuthModule);
}},
{path: 'auth', component: UsersComponent, loadChildren:()=> {
  return import('./user/user.module').then(x=>x.UserModule);
}},

{path: 'book', component: BookComponent, loadChildren:()=> {
  return import('./book/book.module').then(x=>x.BookModule);
}},
// Wild Card Route when no exact path matches with the route then execute wild card routes
// and open whiich ever component you want to use
//Also the app-routine declartion order matters
{ path: '**', component: NotfoundPageComponent }
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
