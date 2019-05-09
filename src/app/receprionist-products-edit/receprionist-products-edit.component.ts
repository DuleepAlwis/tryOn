import { RouterModule, Route, Routes, Router } from "@angular/router";
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
    "HandBags",
    "Caps",
    "Ties",
    "Belts",
    "Gloves"
  ];
  itemObjects = [];
  message = "";
  item = this.items[0];
  type = "";
  isLoading = true;
  constructor(private ProductService: ProductService, private route: Router) {}

  ngOnInit() {}

  getAll() {
    /*const item = document.getElementById("productSelect").value;
    console.log(item);*/
    this.itemObjects = [];

    this.message = this.item + " stock is empty";

    /*this.itemObjects.push({
      type: "Aac",
      id: "123",
      name: "AAA",
      quantity: 67,
      price: 55.5
    });
    console.log(this.item);*/

    switch (this.item) {

      case "Shirts":
        this.ProductService.getAllClothes().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "clothes";

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

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = this.;
          }
          console.log(responseData);
          console.log("BAQ");
        });
        break;
      case "Caps":
        this.ProductService.getAllCaps().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "accessories";

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = this.;
          }
          console.log(responseData);
          console.log("BAQ");
        });
        break;
      case "HandBags":
        this.ProductService.getAllHandBags().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "accessories";

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = this.;
          }
          console.log(responseData);
          console.log("BAQ");
        });
        break;
      case "Gloves":
        this.ProductService.getAllGloves().subscribe(responseData => {
          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "accessories";

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = this.;
          }
          console.log(responseData);
          console.log("BAQ");
        });
        break;
      case "Trousers":
        this.ProductService.getAllTights("Trousers").subscribe(responseData => {

          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "tights";

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = "Shirts";
          }
          console.log(responseData);
          console.log("AZC");
        });
        break;
      case "Shorts":
        this.ProductService.getAllTights("Shorts").subscribe(responseData => {

          if (Number(responseData.message) == 0) {
            this.message = this.item + " stock is empty";
          } else {
            this.type = "tights";

            this.itemObjects = responseData.result;
            console.log(this.itemObjects);
            //this.message = "Shirts";
          }
          console.log(responseData);
          console.log("AZC");
        });
        break;
    }
    this.isLoading = false;
  }

  viewProducts(index: string) {
    console.log(index);
    console.log(this.itemObjects[index]._id);
    /*this.route.navigate([
      "ClothEdit",
      { productId: this.itemObjects[index]._id, type: this.item }
    ]);*/
    this.route.navigateByUrl(
      "ClothEdit/" +
        this.itemObjects[index]._id +
        "/" +
        this.type +
        "/" +
        this.item
    );
  }

  removeProduct(id: string) {
    console.log(this.itemObjects[id]._id);
    this.ProductService.removeProduct(this.item,this.itemObjects[id]._id).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert("Something wrong");
      }
      else
      {
        //console.log(this.itemObjects.splice(id,1));
        this.itemObjects.splice(id,1);
        alert("Product removed");
      }
    });
  }

  selectChangeHandler(event: any) {
    console.log(event.target.value);
    this.item = event.target.value;
  }
}
