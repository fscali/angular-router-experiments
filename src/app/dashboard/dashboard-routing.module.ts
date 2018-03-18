import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { DashBoardClienteComponent } from "./dash-board-cliente/dash-board-cliente.component";
import { HomeClienteComponent } from "./home-cliente/home-cliente.component";
import { IframeComponent } from "../shared/iframe/iframe.component";

const routes: Routes = [
  {
    path: "",
    component: HomeClienteComponent,
    children: [
      {
        path: "dashboard",
        component: DashBoardClienteComponent
      },
      {
        path: "funzionecliente1",
        component: IframeComponent,
        data: {
          funzione: "funzionecliente1"
        }
      },
      {
        path: "funzionecliente2",
        component: IframeComponent,
        data: {
          funzione: "funzionecliente2"
        }
      },
      {
        path: "funzionecliente3",
        component: IframeComponent,
        data: {
          funzione: "funzionecliente3"
        }
      },
      {
        path: "",
        redirectTo: "dashboard"
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
