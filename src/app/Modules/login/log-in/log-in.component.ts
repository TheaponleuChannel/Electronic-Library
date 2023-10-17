import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/Service/customer.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{
  public customers : any = [];
  constructor(
    private customerService : CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
    console.log('Customer',this.customers);
    
  }

  getCustomers(){
    this.customerService.getCustomer()
    .subscribe(res => {
      this.customers = res;     
      console.log('Res',res);
      
  });
}
}
