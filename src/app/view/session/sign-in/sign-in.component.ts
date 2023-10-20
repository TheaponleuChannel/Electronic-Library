import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  form : FormGroup;
  reUrl : string = 'session-sign-in';
  constructor(
    private authService : AuthService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.reUrl = params.get('reUrl');
      console.log('LoginComponent/ngOnInit' + this.reUrl);
    })
  }

  createForm(){
    this.form = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  public onSubmit(){
    this.form.markAllAsTouched();
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.login(email,password).subscribe(data =>{
      if (email==this.authService.adminEmail && password==this.authService.adminPassword) {
        // this.router.navigate( [this.reUrl]);
        this.router.navigate( ['home-page']);
   } else {
    return;
   }
    })
  }
}
