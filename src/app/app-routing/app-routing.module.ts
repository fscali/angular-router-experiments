import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { DashBoardClienteComponent } from "../dash-board-cliente/dash-board-cliente.component";
import { HomeComponent } from "../home/home.component";
import { IframeComponent } from "../iframe/iframe.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "noclient/:url", component: IframeComponent },
  { path: "dashboard-cliente/:id", component: DashBoardClienteComponent },
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
