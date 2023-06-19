import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RecentbookComponent } from './components/recentbook/recentbook.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BookComponent,
    RecentbookComponent,
    BookCardComponent,
    AddBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BookModule { }
