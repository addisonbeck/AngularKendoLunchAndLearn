import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    data: { title: "Home", show: true },
    loadChildren: () =>
      import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "kendo-testing",
    data: { title: "Kendo Testing", show: true },
    loadChildren: () =>
      import("./features/kendo-testing/kendo-testing.module").then(
        m => m.KendoTestingModule
      )
  },
  {
    path: "",
    data: { title: "", show: false },
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
