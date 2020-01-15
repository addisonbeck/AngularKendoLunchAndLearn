import { Component } from "@angular/core";
import { PanelBarItemModel } from "@progress/kendo-angular-layout";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent {
  public router: Router;
  public selectedId = "";

  constructor(router: Router) {
    this.router = router;
  }

  public getRoutes() {
    return this.router.config.filter(route => route.data.show);
  }

  public stateChange(data: Array<PanelBarItemModel>): boolean {
    const focusedEvent: PanelBarItemModel = data.filter(
      item => item.focused === true
    )[0];

    if (focusedEvent.id !== "info") {
      this.selectedId = focusedEvent.id;
      this.router.navigate(["/" + focusedEvent.id]);
    }

    return false;
  }
}
