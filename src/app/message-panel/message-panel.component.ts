import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
  selector: "app-message-panel",
  templateUrl: "./message-panel.component.html",
  styleUrls: ["./message-panel.component.css"]
})
export class MessagePanelComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit() {}
  pulisci() {
    this.loggerService.clear();
  }
}
