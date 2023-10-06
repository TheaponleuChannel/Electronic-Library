import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl = 'http://localhost:3000/users';
  constructor(
    private http : HttpClient
  ) { }

  getUser(){
    return this.http.get(this.apiUrl);
  }
  getUserById(id : number){
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteUser(id : number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
  updateUser(id : number, body : any){
    return this.http.put(this.apiUrl + '/' + id, body);
  }
  saveUser(body : IUser){
    return this.http.post(this.apiUrl, body);
  }
}
