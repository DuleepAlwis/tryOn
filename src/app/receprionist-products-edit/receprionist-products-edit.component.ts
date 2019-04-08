import { ProductService } from "./../services/product.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-receprionist-products-edit",
  templateUrl: "./receprionist-products-edit.component.html",
  styleUrls: ["./receprionist-products-edit.component.css"]
})
export class ReceprionistProductsEditComponent implements OnInit {
  items = [
    "Shirts",
    "Trousers",
    "Shorts",
    "Sarees",
    "HabdBags",
    "Caps",
    "Ties",
    "Belts"
  ];
  itemObjects = [];
  message = "";
  item = this.items[0];
  type = "";
  constructor(private ProductService: ProductService) {}

  ngOnInit() {}

  getAll() {
    /*const item = document.getElementById("productSelect").value;
    console.log(item);*/
    this.message = this.item + " stock is empty";

    this.itemObjects.push({
      type: "Aac",
      id: "123",
      name: "AAA",
      quantity: 67,
      price: 55.5
    });
    console.log(this.item);

    switch (this.item) {
      case "Shirts":
        this.ProductService.getAllClothes().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "cloth";

            this.itemObjects.length = 0;
            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = "Shirts";
          }
          console.log(responseData);
          console.log("AZC");
        });
        break;
      case "Belts":
        this.ProductService.getAllBelts().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "accessories";

            this.itemObjects.length = 0;
            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = this.;
          }
          console.log(responseData);
          console.log("BAQ");
        });
        break;
    }
  }

  viewProducts(id: string) {
    console.log(id);
  }

  removeProduct(id: string) {
    console.log(id);
  }

  selectChangeHandler(event: any) {
    console.log(event.target.value);
    this.item = event.target.value;
  }
}
