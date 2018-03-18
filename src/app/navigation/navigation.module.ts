import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "./tabs/tabs.component";
import { NavigationService } from "./navigation.service";
import { NavigationUtilityService } from "./navigation-utility.service";

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent],
  exports: [TabsComponent],
  providers: [NavigationService, NavigationUtilityService]
})
export class NavigationModule {}
