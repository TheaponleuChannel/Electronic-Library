import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs"

const LOGIN_KEY = 'isLoggedIn';
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public adminEmail : string = 'admin';
    public adminPassword : string = 'admin';

    constructor(
        private router : Router,
        
    ) {
        this.isLoggedIn() === false;
     }

    public login(email: string, passwords: string){
        if(email === this.adminEmail && passwords === this.adminPassword){
            this.router.navigate(['/home-page']);
            // this.isLoggedIn = true;
            localStorage.setItem(LOGIN_KEY, 'true');
            this.isLoggedIn();
        } else {
            // this.isLoggedIn = false;
            this.isLoggedIn() === false;
        }
        return of(this.login)
    }
    // public isUserLoggedIn() : boolean{
    //     return this.isLoggedIn;
    // }
    public isAdminUser(): boolean{
        if(this.adminEmail === 'admin@gmail.com'){
            return true;
        }
        return false;
    }

    isLoggedIn() : boolean{
        return localStorage.getItem(LOGIN_KEY) === 'true';
    }
    public logoutUser(){
        // this.isLoggedIn = false;
        localStorage.removeItem(LOGIN_KEY);
    }


}