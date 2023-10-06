import { Inject } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { SuccessTemplateComponent } from "./app-template-message.component";
// import { SuccessTemplateComponent } from "./app-template-message.component";

@Inject(
    {
        providedIn: 'root'
    }
)

export class AppMessageTemplateService{

    constructor(
        private snackbar : MatSnackBar
    ){}

    private _config : MatSnackBarConfig = {
        duration : 2500,
        horizontalPosition : 'end',
        verticalPosition : 'top'
    };

    public success(message : 'Successful') {
        this._config.data = message;
        this.snackbar.openFromComponent(SuccessTemplateComponent, this._config);
    };

    public error(message : 'Error') {
        this._config.data = message;
        this.snackbar.openFromComponent(SuccessTemplateComponent, this._config);
    }

}