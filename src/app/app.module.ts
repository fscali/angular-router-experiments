import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { IframeComponent } from "./iframe/iframe.component";
import { LoggerService } from "./logger.service";
import { CounterService } from "./counter.service";
import { DashBoardClienteComponent } from "./dash-board-cliente/dash-board-cliente.component";
import { RicercaClienteComponent } from "./ricerca-cliente/ricerca-cliente.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";
import { MessagePanelComponent } from "./message-panel/message-panel.component";
import { RouteReuseStrategy } from "@angular/router";
import { CustomRouteReuseStrategy } from "./custom-route-reuse-strategy";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    DashBoardClienteComponent,
    RicercaClienteComponent,
    HomeComponent,
    MessagePanelComponent,
    MenuComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [
    LoggerService,
    CounterService,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
