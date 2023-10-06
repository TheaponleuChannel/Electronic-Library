import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user-view/user.component';
import { ShareMaterialModule } from 'src/app/Shared/share-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserFormComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
