import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
export class ClienteResolver implements Resolve<string> {
  /* scenario cliente -> oggetto di tipo Cliente */
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<string> {
    let id = route.paramMap.get("id");

    return Promise.resolve(id);
  }
}
