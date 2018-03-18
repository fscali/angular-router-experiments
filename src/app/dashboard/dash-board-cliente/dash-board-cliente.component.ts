import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggerService } from "../../logger.service";

@Component({
  selector: "app-dash-board-cliente",
  templateUrl: "./dash-board-cliente.component.html",
  styleUrls: ["./dash-board-cliente.component.css"]
})
export class DashBoardClienteComponent implements OnInit {
  idCliente: string;
  constructor(
    private loggerService: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /* this.route.params.subscribe(params => {
      this.idCliente = params["id"];
    }); */
  }

  ngOnInit() {
    this.route.parent.data.subscribe((data: { cliente: string }) => {
      this.idCliente = data.cliente;
      this.loggerService.log(
        `E' stata instanziata la dashboard cliente sul cliente ${
          this.idCliente
        } `,
        "success"
      );
    });
  }
}
