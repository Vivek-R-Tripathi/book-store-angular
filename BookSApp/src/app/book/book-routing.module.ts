import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent} from './book.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from '../public-component/home/home.component';
import { RouterModule } from '@angular/router';
import { RecentbookComponent } from './components/recentbook/recentbook.component';
import { AddBookComponent } from '../user/components/add-book/add-book.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
const routes= [ { path: '', component: AllBooksComponent },
// http://localhost:4200/book/book-details/1/auther/3
// Paramter routing
{ path: 'recent', component: RecentbookComponent },
{ path: 'book-details/:id', component: BookDetailsComponent },
{ path: 'new', component: AddBooksComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookRoutingModule { }
