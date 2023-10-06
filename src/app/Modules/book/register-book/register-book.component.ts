import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { IBook } from 'src/app/Models/book';
import { BookService } from 'src/app/Shared/Service/book.service';
import { AppLoaderService } from 'src/app/Shared/components/Service/app-loader/app-loader.service';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.scss']
})
export class RegisterBookComponent implements OnInit {

  form : FormGroup;
  books : IBook[] = [];
  userId : number;
  constructor(
    private fb : FormBuilder,
    private bookService : BookService,
    private loaderService : AppLoaderService,
    private router : Router,
    private route : ActivatedRoute
  ) { }
  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      title : [''],
      author : [''],
      category : [''],
      registerDate : [''],
      cover : [''],
      description : [''],
    })
  }

  onSubmit(){
    this.loaderService.open();
    this.bookService.saveBook(this.form.value)
    .pipe(finalize(() => {this.loaderService.close()}))
    .subscribe((res: IBook) => {
      this.router.navigateByUrl('/book');
    })
  }

  saveImg(){
    
  }

}
