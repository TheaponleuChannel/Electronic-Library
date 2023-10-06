import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOneComponent } from './table-one/table-one.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { TableTwoComponent } from './table-two/table-two.component';

const routes: Routes = [
  {
    path: 'table-1',
    component: TableOneComponent,
    data: { title: 'Table One', breadcrumb: 'Table One' }
  },
  {
    path: 'table-2',
    component: TableTwoComponent,
    data: { title: 'Table Two', breadcrumb: 'Table Two' }
  },
  {
    path: 'table-3',
    component: TableThreeComponent,
    data: { title: 'Table Three', breadcrumb: 'Table Three' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTableRoutingModule { }
