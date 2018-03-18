import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoggerService } from "./logger.service";
import { CounterService } from "./counter.service";
import { RicercaClienteComponent } from "./ricerca-cliente/ricerca-cliente.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";
import { MessagePanelComponent } from "./message-panel/message-panel.component";
import { RouteReuseStrategy } from "@angular/router";
import { CustomRouteReuseStrategy } from "./custom-route-reuse-strategy";
import { MenuComponent } from "./menu/menu.component";
import { NavigationModule } from "./navigation/navigation.module";
import { ClienteResolver } from "./cliente-resolver";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    RicercaClienteComponent,
    HomeComponent,
    MessagePanelComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    CounterService,
    ClienteResolver,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
