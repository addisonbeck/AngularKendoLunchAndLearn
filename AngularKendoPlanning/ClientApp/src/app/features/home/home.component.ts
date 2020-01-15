import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/core/services/app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public user: string;
  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.getUser().subscribe((data: string) => {
      this.user = data;
    });
  }
}
