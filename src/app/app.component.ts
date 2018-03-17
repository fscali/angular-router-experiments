import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "apps";
  constructor(private router: Router) {}
  ricercaNDC(value: string, $event) {
    $event.preventDefault();
    this.router.navigate(["dashboard-cliente", value]);
  }
}
