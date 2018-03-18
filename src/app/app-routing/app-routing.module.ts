import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../home/home.component";
import { IframeComponent } from "../iframe/iframe.component";

const routes: Routes = [
  { path: "noclient/:url", component: IframeComponent },
  {
    path: "cliente",
    loadChildren: "app/dashboard/dashboard.module#DashboardModule"
  },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule {}
