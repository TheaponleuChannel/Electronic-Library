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
  public imageSrc : string | File = './assets/image/profile.jpg';
  public addData = {newData : 'Data'};
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
    // const savedImageSrc = localStorage.getItem('profileImage');
    // if (savedImageSrc) {
    //   this.imageSrc = savedImageSrc;
    // } else {
    //   this.imageSrc = './assets/image/profile.jpg'; // Default image
    // }
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
  }

  saveUser(){
    // const formDataWithNewData = {...this.form.value, ...this.addData};
    if(this.imageSrc){
      const formDataWithImage =  new FormData();
      formDataWithImage.append('image', this.imageSrc);
      formDataWithImage.append('userData', JSON.stringify(this.form.value));
      console.log('Form Data',formDataWithImage);
      
      this.loaderService.open();
      this.userService.saveUser(this.form.value)
      .pipe(finalize(() => {this.loaderService.close()}))
      .subscribe((res) => {
        this.router.navigateByUrl('/user');
      })
    }
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

  public onAttachFileUpload(event : Event){
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files[0]) {
      this.imageSrc = input.files[0];

      // Read the file as a URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target.result as string; // Update image source
        localStorage.setItem('profileImage', this.imageSrc); // Save to local storage
      };
      reader.readAsDataURL(this.imageSrc);
    }
  }
}
