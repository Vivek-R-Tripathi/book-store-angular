import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
const routes= [{
  // Added AuthComponent because it itself have multiple component

  path: 'public', component: PublicComponent, children: [
    { path: 'all-book', component: AllBooksComponent },
    // http://localhost:4200/public/book-details/1/auther/3
    // Paramter routing
    { path: 'book-details/:id/auther/:autherId', component: BookDetailsComponent }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
