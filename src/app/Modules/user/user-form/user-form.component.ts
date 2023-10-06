import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { IUser } from 'src/app/Models/user';
import { UserService } from 'src/app/Shared/Service/user.service';
import { AppLoaderService } from 'src/app/Shared/components/Service/app-loader/app-loader.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form : FormGroup;
  userId : number;
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private loaderService : AppLoaderService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.userId = this.route.snapshot.params['id'];
    this.userId && this.showFormEdit();
  }

  createForm(){
    this.form = this.fb.group({
      username : [''],
      gender : [''],
      email : [''],
      address : [''],
      phone : [''],
    })
  }

  onSubmit(){
    this.userId ? this.updateUser() : this.saveUser();
    // this.saveUser();
    
  }

  saveUser(){
    this.loaderService.open();
    this.userService.saveUser(this.form.value)
    .pipe(finalize(() => {this.loaderService.close()}))
    .subscribe((res: IUser) => {
      this.router.navigateByUrl('/user');

    })
  }

  showFormEdit(){
    this.loaderService.open();
    this.userService.getUserById(this.userId)
    .pipe(finalize(() => {this.loaderService.close()}))
    .subscribe((res: IUser[]) => {
      this.form.patchValue(res);
    })
  }
  updateUser(){
    this.loaderService.open();
    this.userService.updateUser(this.userId, this.form.value)
    .pipe(finalize(() => this.loaderService.close()))
    .subscribe((res : IUser) => {
      this.router.navigateByUrl('/user');
    })
  }
}
