import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-receptionist-products",
  templateUrl: "./receptionist-products.component.html",
  styleUrls: ["./receptionist-products.component.css"]
})
export class ReceptionistProductsComponent implements OnInit {
  items = [
    "T-Shirts",
    "Shirts",
    "Trousers",
    "Shorts",
    "Sarees",
    "Belts",
    "Ties"
  ];
  constructor() {}

  ngOnInit() {}
}
