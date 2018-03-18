import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashBoardClienteComponent } from "./dash-board-cliente/dash-board-cliente.component";
import { HomeClienteComponent } from './home-cliente/home-cliente.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],

  declarations: [DashBoardClienteComponent, HomeClienteComponent]
})
export class DashboardModule {}
