import { Component, Input,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-template-message',
  templateUrl: './app-template-message.component.html',
  styleUrls: ['./app-template-message.component.scss']
})
export class AppTemplateMessageComponent {

  @Input() background : string;
  @Input() icon : string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public message: string
  ){}
}

@Component({
  selector: 'app-success-template',
  template: `<app-app-template-message [background]="getBackgroundColor()" [icon]="'done'"> </app-app-template-message>`
})
export class SuccessTemplateComponent {
  getBackgroundColor() {
    return '#4caf50';
  }
}