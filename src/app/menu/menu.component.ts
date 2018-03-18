import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  isWithCliente: boolean = false;
  idCliente: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith("/cliente/")) {
          this.isWithCliente = true;
          this.idCliente = event.url.split("/")[2];
        } else {
          this.isWithCliente = false;
          this.idCliente = undefined;
        }
      }
    });
  }

  ngOnInit() {}
  naviga(funz: string, withCliente: boolean) {
    if (!withCliente) {
      this.router.navigate([funz], { relativeTo: this.route.parent });
    } else {
      this.router.navigate(["cliente", this.idCliente, funz]);
    }
  }
  navigaHome() {
    this.router.navigate(["/"]);
  }
}
