import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  items = [];
  tmpItem = {};
  constructor() {}

  getItemsCount() {
    return this.items.length;
  }

  setTmpItem(tmp: Object) {
    this.tmpItem = tmp;
  }

  addToShoppingCart(item: Object) {
    this.items.push(item);
    this.tmpItem = {};
    return this.items.length - 1;
  }

  clearCart() {
    this.items = [];
    this.tmpItem = {};
  }
}
