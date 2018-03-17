import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dash-board-cliente",
  templateUrl: "./dash-board-cliente.component.html",
  styleUrls: ["./dash-board-cliente.component.css"]
})
export class DashBoardClienteComponent implements OnInit {
  idCliente: string;
  constructor(
    private loggerService: LoggerService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.idCliente = params["id"];
    });
  }

  ngOnInit() {
    this.loggerService.log(
      `E' stata instanziata la dashboard cliente sul cliente ${
        this.idCliente
      } `,
      "success"
    );
  }
}
