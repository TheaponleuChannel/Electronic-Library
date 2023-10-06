import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { IBook } from 'src/app/Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public apiUrl = 'http://localhost:3000/books';
  constructor(
    private http : HttpClient
  ) { }

  getBook(){
    return this.http.get(this.apiUrl);
  }
  deleteBook(id : number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
  updateBook(id : number, body : Data){
    return this.http.put(this.apiUrl + '/' + id, body);
  }
  getBokByID(id : number){
    return this.http.get(this.apiUrl + '/' + id);
  }

  saveBook(body : IBook){
    return this.http.post(this.apiUrl, body);
  }

}
