import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KendoTestingComponent } from './kendo-testing.component';

const routes: Routes = [{ path: '', component: KendoTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KendoTestingRoutingModule { }
