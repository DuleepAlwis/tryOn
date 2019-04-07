import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Accessories } from "./../modules/Accessories";
import { ProductService } from "./../services/product.service";

@Component({
  selector: "app-accessories-form",
  templateUrl: "./accessories-form.component.html",
  styleUrls: ["./accessories-form.component.css"]
})
export class AccessoriesFormComponent implements OnInit {
  form = new FormGroup({
    category: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    length: new FormControl("", Validators.required),
    width: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required)
  });

  title: string;
  items = ["Gloves", "Belt", "Caps", "HandBags"];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("title");
      //console.log(this.title);
      //console.log(params);
    });
  }

  saveProduct() {
    const accessories: Accessories = {
      category: this.form.get("category").value,
      name: this.form.get("name").value,
      length: this.form.get("length").value,
      width: this.form.get("width").value,
      quantity: this.form.get("quantity").value,
      price: this.form.get("price").value
    };
    console.log(accessories);
    switch (this.form.get("category").value) {
      case "Gloves":
        this.productService.addGloves(accessories);
        break;
      case "Belt":
        this.productService.addBelts(accessories);
        break;
      case "Caps":
        this.productService.addCaps(accessories);
        break;
      case "HandBags":
        this.productService.addHandBags(accessories);
        break;
    }
  }
}
