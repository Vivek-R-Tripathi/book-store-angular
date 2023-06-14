import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent} from './book.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from '../public-component/home/home.component';
import { RouterModule } from '@angular/router';
const routes= [{
  // Added AuthComponent because it itself have multiple component

  path: 'book', component: BookComponent, children: [
    { path: 'all-book', component: AllBooksComponent },
    // http://localhost:4200/book/book-details/1/auther/3
    // Paramter routing
    { path: 'book-details/:id', component: BookDetailsComponent }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookRoutingModule { }