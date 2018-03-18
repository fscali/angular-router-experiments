import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  navigate(path: string) {
    let fragments = [];
    if (!!path) {
      fragments = path.split("/");
      this.router.navigate(fragments);
    }
  }
}
