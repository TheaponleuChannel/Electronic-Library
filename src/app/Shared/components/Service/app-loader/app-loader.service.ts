import { Injectable } from "@angular/core";
import { AppLoaderComponent } from "./app-loader.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AppLoaderService {
    dialogRef : MatDialogRef<AppLoaderComponent>;

    private loading$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(
        private dialog : MatDialog
    ){}

    public open() {
        this.loading$.next(true);
        };
    
      public close() {
        this.loading$.next(false);
      }
    
      public getLoading(): Observable<boolean> {
        return this.loading$.asObservable();
      }

}