import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { LoggerService } from "../../logger.service";
import { CounterService } from "../../counter.service";

@Component({
  selector: "app-iframe",
  templateUrl: "./iframe.component.html",
  styleUrls: ["./iframe.component.css"]
})
export class IframeComponent implements OnInit {
  @Input() url: SafeResourceUrl;
  id: number;
  constructor(
    private loggerService: LoggerService,
    private counterService: CounterService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.id = this.counterService.getCounter();
    /* this.route.params.subscribe(params => {
      let funz = params["url"];
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        `http://localhost:8080/static/index.html?url=${funz}`
      );
    }); */
    this.route.data.subscribe(data => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        `http://localhost:8080/static/index.html?url=${data.funzione}`
      );
    });
  }

  ngOnInit() {
    this.loggerService.log(
      `E' stato creato il componente ${this.constructor.name} avente id ${
        this.id
      }`,
      "success"
    );
  }
  ngOnDestroy() {
    this.loggerService.log(
      `Sto eliminando il componente ${this.constructor.name} avente id ${
        this.id
      }`,
      "warning"
    );
  }
}
