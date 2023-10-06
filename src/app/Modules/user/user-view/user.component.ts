import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { IUser } from 'src/app/Models/user';
import { UserService } from 'src/app/Shared/Service/user.service';
import { AppConfirmService } from 'src/app/Shared/components/Service/app-confirm/app-confirm.service';
import { AppLoaderService } from 'src/app/Shared/components/Service/app-loader/app-loader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users : IUser[] = [];
  displayedColumns = ['id', 'username', 'email', 'address', 'phone','gender', 'action'];
  
  constructor(
    private userService : UserService,
    private loaderService : AppLoaderService,
    private confirmService  : AppConfirmService,
    private router : Router

  ){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.loaderService.open();
    this.userService.getUser()
    .pipe(finalize(() => {this.loaderService.close()}))
    .subscribe((res: IUser[]) => {
      this.users = res;
    })
  }

  deleteUser(id : number){
    const userToDelete = this.users.find(user => user.id === id);
    this.confirmService.confirm({
      title: 'Confirm',
      message: 'Are you sure want to delete user' + `<b>${userToDelete.username}</b>` +' from your library?',
      otherMessage: 'This process can not be undone.'
    }).subscribe(res => {
      if(res){
        this.loaderService.open();
        this.userService.deleteUser(id)
        .pipe(finalize(() => {this.loaderService.close();}))
        .subscribe((res: IUser) => {
          this.getUser();
        })
      } else return;
    })
  }

  updateUser(id : number){
    this.router.navigateByUrl('/user/edit/' + id);
  }

}
