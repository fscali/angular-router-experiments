import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
@Injectable()
export class NavigationUtilityService {
  constructor() {}
  getRouteKey(route: ActivatedRouteSnapshot): string {
    const key =
      route.url.join("/") ||
      (route.parent && route.parent.url.join("/")) ||
      undefined;

    return key;
  }
}
