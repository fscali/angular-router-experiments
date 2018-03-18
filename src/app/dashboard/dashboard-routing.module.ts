import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { DashBoardClienteComponent } from "./dash-board-cliente/dash-board-cliente.component";
import { HomeClienteComponent } from "./home-cliente/home-cliente.component";

const routes: Routes = [
  {
    path: "",
    component: HomeClienteComponent,
    children: [
      {
        path: ":id/dashboard",
        component: DashBoardClienteComponent
      },
      {
        path: ":id",
        redirectTo: ":id/dashboard"
      }
    ]

    /* children: [
      
      { path: "home", component: HomeClienteComponent }
      { path: "", redirectTo: "/home" },
    ] */
  }
  /* {
    path: ":id",
    redirectTo: "/dashboard-cliente/:id",
    pathMatch: "full"
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

  declarations: []
})
export class DashboardRoutingModule {}
