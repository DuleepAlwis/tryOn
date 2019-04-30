import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ProductService } from "../services/product.service";
import { ShoppingCartService } from "../services/shopping-cart.service";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.css"]
})
export class ProductViewComponent implements OnInit {
  category: string;
  id: string;
  item = [];
  errorMsg = "";
  clothes: boolean = false;
  trousers:boolean = false;
  accessories:boolean = false;
  imgFrontPath: string;
  imgBackPath: string;
  imgLeftPath: string;
  imgRightPath: string;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get("category");
      this.id = params.get("id");
      this.retrieveProduct();
      //console.log(this.title);
      //console.log(params);
    });
  }

  isLoggedIn() {
    return this.authService.getIsAuth();
  }

  retrieveProduct() {
    switch (this.category) {
      case "Shirts":
        this.clothes = true;
        this.trousers = false;
        this.accessories = false;
        this.getShirts();
        break;
      case "Trousers":
      this.clothes = false;
      this.trousers = true;
      this.accessories = false;

        this.getTrousers();
        break;
      case "Shorts":
      this.clothes = false;
      this.trousers = true;
      this.accessories = false;

        this.getShorts();
        break;
      case "Caps":
        this.clothes = false;
        this.trousers = false;
        this.accessories = true;

        this.getCaps();
        break;
      case "HandBags":
        this.clothes = false;
        this.trousers = false;
        this.accessories = true;

        this.getHandBags();
        break;
      case "Belts":
        this.clothes = false;
        this.trousers = false;
        this.accessories = true;

        this.getBelts();
        break;
      case "Gloves":
        this.clothes = false;
        this.trousers = false;
        this.accessories = true;

        this.getGloves();
        break;
    }
  }

  getShirts() {
    console.log("AAA");
    this.productService
      .getCloth(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          //this.clothes = true;
          //console.log(responseData);
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  getTrousers() {
    this.productService
      .getTight(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          //  console.log(responseData.result);
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  getShorts() {
    this.productService
      .getTight(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  getCaps() {
    this.productService
      .getAccessories(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          // console.log(responseData.result);
          this.item.push(responseData.result[0]);
          console.log(this.item[0].name);
          //console.log(this.item[0].imgFront);
          this.loadImages();
        }
      });
  }

  getHandBags() {
    this.productService
      .getAccessories(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  getBelts() {
    this.productService
      .getAccessories(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  getGloves() {
    this.productService
      .getAccessories(this.id, this.category)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          this.errorMsg = "Not found";
        } else {
          this.item.push(responseData.result[0]);
          this.loadImages();
        }
      });
  }

  loadImages() {
    // console.log(this.item[0][0].imgFront);
    this.imgFrontPath = this.item[0].imgFront;
    this.imgBackPath = this.item[0].imgBack;
    this.imgLeftPath = this.item[0].imgLeft;
    this.imgRightPath = this.item[0].imgRight;
  }

  shoppingCart() {
    this.shoppingCartService.setTmpItem(this.item[0]);
    this.router.navigate(["/shoppingcart", this.category]);
  }
}
