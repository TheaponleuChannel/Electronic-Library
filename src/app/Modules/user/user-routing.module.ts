import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user-view/user.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'add-new',
    component: UserFormComponent,
    data: { title: 'Add New', breadcrumb: 'Add New' }
  },
  {
    path: 'edit/:id',
    component: UserFormComponent,
    data: { title: 'Add New', breadcrumb: 'Add New' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
