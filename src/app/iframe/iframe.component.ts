import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { LoggerService } from "../logger.service";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-iframe",
  templateUrl: "./iframe.component.html",
  styleUrls: ["./iframe.component.css"]
})
export class IframeComponent implements OnInit {
  @Input() url: String;
  id: number;
  constructor(
    private loggerService: LoggerService,
    private counterService: CounterService
  ) {
    this.id = this.counterService.getCounter();
  }

  ngOnInit() {
    this.loggerService.log(
      `E' stato creato il componente ${this.constructor.name} avente id ${
        this.id
      }`
    );
  }
  ngOnDestroy() {
    this.loggerService.log(
      `Sto eliminando il componente ${this.constructor.name} avente id ${
        this.id
      }`
    );
  }
}
