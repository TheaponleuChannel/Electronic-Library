import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTableRoutingModule } from './test-table-routing.module';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { ShareModule } from 'src/app/Shared/share.module';
import { ShareComponentModule } from 'src/app/Shared/components/share-component.module';


@NgModule({
  declarations: [
    TableOneComponent,
    TableTwoComponent,
    TableThreeComponent
  ],
  imports: [
    CommonModule,
    TestTableRoutingModule,
    ShareModule,
    ShareComponentModule
  ]
})
export class TestTableModule { }
