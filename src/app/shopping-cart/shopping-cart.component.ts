import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CustomerService } from "../services/customer.service";
import { ENGINE_METHOD_DIGESTS } from 'constants';

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
  productPrice: string = "0";
  size: string;
  tmpPrice: string = "0";
  totalPrice: string= "0";
  quantityArr = [];
  cartItems = [];
  quantity: string;
  displayBtn: boolean = false;
  email:string;
  formDelivery = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    mobileno: new FormControl("", [Validators.required]),

    gender: new FormControl("", [Validators.required])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    public shoppingCartService: ShoppingCartService,
    private authService: AuthService,
    private customerService: CustomerService,
    private router:Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get("category");
      console.log(this.category);
      this.totalPrice = this.shoppingCartService.totalPrice;
      this.product = this.shoppingCartService.tmpItem;
      this.cartItems = this.shoppingCartService.items;
      this.displayBtn = false;
      this.productView();
    });

    this.customerService
      .getCustomerProfile(this.authService.getUserId())
      .subscribe(responseData => {
        console.log(responseData);
        if (responseData.message == 0) {
          this.router.navigate(["/"]);
        } else {
          this.formDelivery.patchValue({
            name: responseData.result.name,
            address: responseData.result.address,
            city: responseData.result.city,
            district: responseData.result.district,
            mobileno: responseData.result.mobileno,

            gender: responseData.result.gender
          });
          this.email = responseData.result.email;
        }
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
        this.setAccessoriesPriceQuantity(Number(this.product.quantity));
        console.log(this.accessories);
        break;
      case "HandBags":
        this.cloth = false;
        this.accessories = true;
        this.setAccessoriesPriceQuantity(Number(this.product.quantity));

        break;
      case "Belts":
        this.cloth = false;
        this.accessories = true;
        this.setAccessoriesPriceQuantity(Number(this.product.quantity));

        break;
      case "Gloves":
        this.cloth = false;
        this.accessories = true;
        this.setAccessoriesPriceQuantity(Number(this.product.quantity));

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
    for (i = 1; i < (maxNumber + 1); i++) {
      this.quantityArr.push(i);
    }
  }

  calculateProductPrice(event: any) {
    this.productPrice = String(
      parseInt(this.tmpPrice) * parseInt(event.target.value)
    );
    console.log("productPriceQuantity "+this.productPrice+" "+event.target.value);
    this.quantity = event.target.value;
    this.displayBtn = true;
  }

  addClothToCart() {
    console.log("Total "+this.totalPrice);

    this.totalPrice = String(
      parseFloat(this.totalPrice) + parseFloat(this.productPrice)
    );
    console.log("Total "+this.totalPrice);
    console.log("product "+this.productPrice);

    let cartProduct = {
      category:this.category,
      productId: this.product._id,
      name: this.product.name,
      quantity: this.quantity,
      price: this.tmpPrice,
      size: this.size
    };
    //console.log(this.cartItems.length);
    this.shoppingCartService.totalPrice = this.totalPrice;

    this.shoppingCartService.addToShoppingCart(cartProduct);
    this.cartItems.push(cartProduct);
    this.cartItems.pop();
    this.displayBtn = false;
    //console.log(this.cartItems);
    this.quantity = "0";
    this.tmpPrice = "0";
    this.product = {};
    this.size = "";
    this.productPrice = "0";
    this.quantityArr = [];
  }

  setAccessoriesPriceQuantity(quantity: Number) {
    this.setQuantity(quantity);
    this.tmpPrice = this.product.price;
  }

  nameInvalid() {
    //console.log("Name"+" "+this.formDelivery.get("name").invalid);
    return this.formDelivery.get("name").invalid;
  }

  addressInvalid() {
    //console.log("address"+" " +this.formDelivery.get("address").value+" "+this.formDelivery.get("address").invalid);

    return this.formDelivery.get("address").invalid;
  }

  cityInvalid() {
   // console.log("city"+" "+this.formDelivery.get("city").invalid);

    return this.formDelivery.get("city").invalid;
  }

  districtInvalid() {
    //console.log("district"+" "+this.formDelivery.get("district").invalid);

    return this.formDelivery.get("district").invalid;
  }

  mobileNoInvalid() {
   // console.log("mobileno"+" "+this.formDelivery.get("mobileno").invalid);

    return this.formDelivery.get("mobileno").invalid;
  }

  saveOrder() {
    if (

        this.nameInvalid() ||
        this.addressInvalid() ||
        this.cityInvalid() ||
        this.districtInvalid() ||
        this.mobileNoInvalid()

    ) {
      alert("Delivery details should be filled");
      return -1;
    }
    let deliveryDetails = {
      id: this.authService.getUserId(),
      name: this.formDelivery.get("name").value,
      address: this.formDelivery.get("address").value,
      city: this.formDelivery.get("city").value,
      district: this.formDelivery.get("district").value,
      mobileno: this.formDelivery.get("mobileno").value
    };

    this.shoppingCartService
      .saveOrder(this.email,deliveryDetails,this.authService.getUserId())
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong Order didn't save");
        } else {
         // this.shoppingCartService.itemQuantityUpdate();
          alert("Order Saved, email has been sent");
        }
        console.log(responseData);
      });
  }
  removeItem(index) {
    this.totalPrice = String(Number(this.totalPrice) - Number(this.shoppingCartService.items[index].price));
    this.shoppingCartService.setTotalPrice(this.totalPrice);
    this.cartItems.splice(Number(index), 0);
    this.shoppingCartService.items.splice(Number(index), 1);
    localStorage.removeItem("items");
    localStorage.removeItem("totalPrice");

    localStorage.setItem("totalPrice", this.totalPrice);
  }
}
