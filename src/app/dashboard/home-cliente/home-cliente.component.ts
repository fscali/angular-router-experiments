import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home-cliente",
  templateUrl: "./home-cliente.component.html",
  styleUrls: ["./home-cliente.component.css"]
})
export class HomeClienteComponent implements OnInit {
  idCliente: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idCliente = params["id"];
    });
  }

  ngOnInit() {}
}
