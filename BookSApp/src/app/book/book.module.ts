import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule
  ]
})
export class BookModule { }
