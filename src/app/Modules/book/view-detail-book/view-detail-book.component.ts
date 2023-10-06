import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-view-detail-book',
  templateUrl: './view-detail-book.component.html',
  styleUrls: ['./view-detail-book.component.scss']
})
export class ViewDetailBookComponent implements OnInit {

   bookCover = this.data.bookData.cover;
  constructor(
    public dialogRef : MatDialogRef<ViewDetailBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    console.log('Book Data',this.data);
    console.log(this.bookCover);
    
  }
  close(){
    this.dialogRef.close(true);
  }
}
