import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Route, RouterModule, Router } from "@angular/router";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "../services/shopping-cart.service";
@Component({
  selector: "app-customer-navigation",
  templateUrl: "./customer-navigation.component.html",
  styleUrls: ["./customer-navigation.component.css"]
})
export class CustomerNavigationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  itemsCountShoppingCart() {
    return this.shoppingCartService.getItemsCount();
  }
}
