import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public apiUrl = 'http://localhost:3000/api/customers';

  constructor(
    private http : HttpClient
  ) { }

  getCustomer(){
    return this.http.get(this.apiUrl);
  }

  getCustomerById(id : number){
    return this.http.get(this.apiUrl + '/' + id);
  }

  saveCustomer(body : any){
    return this.http.post(this.apiUrl, body);
  }

  updateCustomer(id : number, body : any){
    return this.http.put(this.apiUrl + '/' + id, body);
  }

  deleteCustomer(id : number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
