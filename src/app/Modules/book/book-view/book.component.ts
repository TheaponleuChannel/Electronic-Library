import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { IBook } from 'src/app/Models/book';
import { BookService } from 'src/app/Shared/Service/book.service';
import { AppConfirmService } from 'src/app/Shared/components/Service/app-confirm/app-confirm.service';
import { AppLoaderService } from 'src/app/Shared/components/Service/app-loader/app-loader.service';
import { ViewDetailBookComponent } from '../view-detail-book/view-detail-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  searchBox = new FormControl();
  books: IBook[] = [];
  searchBook = '';

  constructor( 
    private bookService : BookService,
    private loaderService : AppLoaderService,
    private confirmService : AppConfirmService,
    private dialog : MatDialog
  ) {}
  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.loaderService.open();
    this.bookService.getBook()
    .pipe(finalize(() => {this.loaderService.close()}))
    .subscribe((res: IBook[]) => {
      this.books = res;
    })
  }

  deleteBook(id : number){
    const bookToDelete = this.books.find(book => book.id == id);
    this.confirmService.confirm({
      title: 'Confirm',
      message: 'Are you sure want to delete book' + `<b>${bookToDelete.title}</b>` +' from your library?',
      otherMessage: 'This process can not be undone.'
    }).subscribe(res => {
      if(res){
          this.loaderService.open();
          this.bookService.deleteBook(id)
          .pipe(finalize(() => {this.loaderService.close();}))
          .subscribe((res: IBook) => {
          this.getBook();
    })
      }else return;
    })
  }
  viewBook(id : number){
    const bookData = this.books.find(book => book.id == id);
    const dialogRef = this.dialog.open(ViewDetailBookComponent, {
      width : '100%',
      height : '100vh',
      disableClose: true,
      data : {
        bookData : bookData
      }
    })
  }
}
