import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareMaterialModule } from 'src/app/Shared/share-material.module';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ShareMaterialModule
  ]
})
export class LoginModule { }
