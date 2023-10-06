import { Component } from '@angular/core';
import { AppConfirmService } from 'src/app/Shared/components/Service/app-confirm/app-confirm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private confirmService : AppConfirmService
  ){}

  public confirm(){
    // this.confirmService.confirm({
    //   title: 'Are you sure?',
    //   message: 'Do you really want to delete this record?',
    //   otherMessage: 'This operation is irreversible.'
    // })
    console.log('confirm');
    
    alert('clicked');
  }
}
