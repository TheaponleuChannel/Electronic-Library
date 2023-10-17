import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { AdminLayoutComponent } from './Shared/components/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'home-page',
        loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule),
        data: { title: 'Home', breadcrumb: 'Welcome!', animation : 'home' }
      },
      {
        path: 'book',
        loadChildren: () => import('./Modules/book/book.module').then(m => m.BookModule),
        data: { title: 'Book', breadcrumb: 'Book', animation : 'book' }
      },
      {
        path: 'user',
        loadChildren: () => import('./Modules/user/user.module').then(m => m.UserModule),
        data: { title: 'User', breadcrumb: 'User', animation: 'user' }
      },
      // {
      //   path: 'test',
      //   loadChildren: () => import('./Modules/test-table/test-table.module').then(m => m.TestTableModule),
      //   data: { title: 'Test', breadcrumb: 'Test', animation: 'test' }
      // }
      {
        path: 'login',
        loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule),
        data: { title: 'Login', breadcrumb: 'Login', animation: 'login' }
      }
    ]
  }
];
export const appConfig : ApplicationConfig ={
  providers : [
    provideRouter(routes)
  ]
};
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
