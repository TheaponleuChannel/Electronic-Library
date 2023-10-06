import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book-view/book.component';
import { RegisterBookComponent } from './register-book/register-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'register-book',
    component: RegisterBookComponent,
    data: { title: 'Register Book', breadcrumb: 'Register' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
