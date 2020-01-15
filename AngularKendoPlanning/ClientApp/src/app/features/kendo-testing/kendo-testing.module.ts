import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KendoTestingRoutingModule } from './kendo-testing-routing.module';
import { KendoTestingComponent } from './kendo-testing.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";


@NgModule({
  declarations: [KendoTestingComponent],
  imports: [
      CommonModule,
      ButtonsModule,
      KendoTestingRoutingModule
  ]
})
export class KendoTestingModule { }
