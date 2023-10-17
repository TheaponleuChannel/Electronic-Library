import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book-view/book.component';
import { ShareMaterialModule } from 'src/app/Shared/share-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBookPipe } from './book-view/search-book.pipe';
import { RegisterBookComponent } from './register-book/register-book.component';
import { ViewDetailBookComponent } from './view-detail-book/view-detail-book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CloudinaryModule } from '@cloudinary/ng';


@NgModule({
  declarations: [
    BookComponent,
    SearchBookPipe,
    RegisterBookComponent,
    ViewDetailBookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ShareMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    CloudinaryModule
  ]
})
export class BookModule { }
