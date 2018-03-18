import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IframeComponent } from "./iframe/iframe.component";

@NgModule({
  imports: [CommonModule],
  declarations: [IframeComponent],
  exports: [IframeComponent]
})
export class SharedModule {}
