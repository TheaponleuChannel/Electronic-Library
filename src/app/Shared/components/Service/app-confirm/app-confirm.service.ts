import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AppConfirmComponent } from "./app-confirm.component";

interface IConfirmData{
    title?: string,
    message?: string,
    otherMessage?: string
}
@Injectable(
    {
        providedIn: 'root'
    }
)

export class AppConfirmService{

    constructor(
        private dialog : MatDialog
    ){}

    public confirm(data : IConfirmData = {}) : Observable<boolean>{
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef : MatDialogRef<AppConfirmComponent>;
        dialogRef = this.dialog.open(AppConfirmComponent, {
            width: '400px',
            disableClose: true,
            data: {title: data.title, message: data.message, otherMessage: data.otherMessage}
        })
        return dialogRef.afterClosed();
    }
}