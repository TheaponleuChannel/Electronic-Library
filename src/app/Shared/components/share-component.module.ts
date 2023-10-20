import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ShareMaterialModule } from '../share-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AppLoaderComponent } from './Service/app-loader/app-loader.component';
import { AppConfirmComponent } from './Service/app-confirm/app-confirm.component';
import { AppTemplateMessageComponent, SuccessTemplateComponent } from './app-template-message/app-template-message.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const components = [
  AdminLayoutComponent,
  SidenavComponent,
  BreadcrumbComponent,
  AppLoaderComponent,
  AppConfirmComponent,
  AppTemplateMessageComponent,
  SuccessTemplateComponent,
  DataGridComponent,

]

@NgModule({
  declarations: [
    components,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareMaterialModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
    components
  ]
})
export class ShareComponentModule { }
