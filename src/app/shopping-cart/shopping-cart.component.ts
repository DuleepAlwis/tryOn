import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  product: Object;
  cloth: boolean = false;
  accessories: boolean = false;
  category: string;
  productPrice: string;
  size: string;
  tmpPrice: string;
  totalPrice: string;
  quantityArr = [];
  cartItems = [];
  quantity: string;
  displayBtn: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    public shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get("category");
      this.product = this.shoppingCartService.tmpItem;
      this.cartItems = this.shoppingCartService.items;
      this.displayBtn = false;
      this.productView();
    });
  }

  productView() {
    switch (this.category) {
      case "Shirts":
        this.cloth = true;
        this.accessories = false;
        break;
      case "Trousers":
        this.cloth = true;
        this.accessories = false;

        break;
      case "Shorts":
        this.cloth = true;
        this.accessories = false;

        break;
      case "Caps":
        this.cloth = false;
        this.accessories = true;

        break;
      case "HandBags":
        this.cloth = false;
        this.accessories = true;

        break;
      case "Belts":
        this.cloth = false;
        this.accessories = true;

        break;
      case "Gloves":
        this.cloth = false;
        this.accessories = true;
        break;
    }
  }

  setMaxQuantity(event: any) {
    console.log(event.target.value);
    switch (event.target.value) {
      case "Small":
        this.size = "Small";
        this.setQuantity(Number(this.product.small.quantity));
        this.tmpPrice = this.product.small.price;

        break;
      case "Medium":
        this.size = "Medium";
        this.setQuantity(Number(this.product.medium.quantity));
        this.tmpPrice = this.product.medium.price;
        break;
      case "Large":
        this.size = "Large";
        this.setQuantity(Number(this.product.large.quantity));
        this.tmpPrice = this.product.large.price;
        break;
    }
  }

  setQuantity(maxNumber: Number) {
    let i = 0;
    for (i = 1; i < maxNumber + 1; i++) {
      this.quantityArr.push(i);
    }
  }

  calculateProductPrice(event: any) {
    this.productPrice = String(
      parseInt(this.tmpPrice) * parseInt(event.target.value)
    );
    this.quantity = event.target.value;
    this.displayBtn = true;
  }

  addToCart() {
    this.totalPrice = String(
      parseFloat(this.totalPrice) + parseFloat(this.productPrice)
    );
    let cartProduct = {
      productId: this.product._id,
      name: this.product.name,
      quantity: this.quantity,
      price: this.tmpPrice,
      size: this.size
    };
    console.log(this.cartItems.length);
    this.shoppingCartService.addToShoppingCart(cartProduct);
    this.cartItems.push(cartProduct);
    this.cartItems.pop();
    this.displayBtn = false;
    console.log(this.cartItems);
    this.quantity = "";
    this.tmpPrice = "";
    this.product = {};
    this.size = "";
    this.productPrice = "";
    this.quantityArr = [];
  }

  getShoppingCartItems() {}

  removeItem(index) {
    this.cartItems.splice(Number(index), 0);
    this.shoppingCartService.items.splice(Number(index), 1);
  }
}
