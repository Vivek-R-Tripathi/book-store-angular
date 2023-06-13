import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [

  {
    path: 'user/:userId', component: UsersComponent, children:
     [{ path: 'delete-book', component: DeleteBookComponent },
      { path: 'add-book', component: AddBookComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
