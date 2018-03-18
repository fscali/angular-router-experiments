import { ActivatedRouteSnapshot } from "@angular/router";
import { RouteReuseStrategy, DetachedRouteHandle } from "@angular/router";
import { LoggerService } from "./logger.service";
import { Injector, Inject } from "@angular/core";
import { NavigationUtilityService } from "./navigation/navigation-utility.service";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor(
    @Inject(LoggerService) private loggerService: LoggerService,
    @Inject(NavigationUtilityService)
    private navigationUtilityService: NavigationUtilityService
  ) {}

  log(message) {
    this.loggerService.log(`CUSTOM_ROUTE_STRATEGY: ${message}`, "primary");
  }
  getRouteKey(route: ActivatedRouteSnapshot): string {
    /* const key =
      route.url.join("/") ||
      (route.parent && route.parent.url.join("/")) ||
      undefined;

    return key; */
    return this.navigationUtilityService.getRouteKey(route);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const key = this.getRouteKey(route);
    this.handlers[key] = handle;
    this.log(`Salvato  route con chiave ${key}`);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getRouteKey(route);
    const result: boolean = !!this.handlers[key];
    this.log(`ShouldAttach: key=${key}, result=${result}`);
    return result;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) return null;
    if (route.routeConfig.loadChildren) return null;
    const key = this.getRouteKey(route);
    return this.handlers[key];
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    const keyFuture = !!future ? this.getRouteKey(future) : undefined;
    const keyCurr = !!curr ? this.getRouteKey(curr) : undefined;
    /* this.log(
      `ShouldReuseRoute: keyFuture = ${keyFuture}, keyCurr = ${keyCurr}`
    ); */
    const result =
      future.routeConfig === curr.routeConfig && keyFuture == keyCurr;
    return result;
  }
}
