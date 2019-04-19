import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  items = [];
  tmpItem = {};
  totalPrice: string;
  constructor() {
    this.items = this.extractObjects(localStorage.getItem("items"));
    this.tmpItem =
      localStorage.getItem("tmpItem") == null
        ? {}
        : JSON.parse(localStorage.getItem("tmpItem"));
    this.totalPrice = localStorage.getItem("totalPrice");
  }

  extractObjects(items: string) {
    if (items == null) {
      return [];
    }
    let itemList = JSON.parse(items);
    let returnList = [];
    let i = 0;
    for (i = 0; i < itemList.length; i++) {
      returnList.push(JSON.parse(itemList[i]));
    }
    return returnList;
  }
  getItemsCount() {
    return this.items.length;
  }

  setTmpItem(tmp: Object) {
    this.tmpItem = tmp;
    localStorage.setItem("tmpItem", JSON.stringify(tmp));
  }

  addToShoppingCart(item: Object) {
    this.items.push(item);
    this.addToLocalStorage();
    this.tmpItem = {};
    localStorage.removeItem("tmpItem");
    return this.items.length - 1;
  }

  addToLocalStorage() {
    let itemString = [];
    if (localStorage.getItem("items") != null) {
      localStorage.removeItem("items");
    }
    let i = 0;
    for (i = 0; i < this.items.length; i++) {
      itemString.push(JSON.stringify(this.items[i]));
    }
    localStorage.setItem("items", JSON.stringify(itemString));
  }

  clearCart() {
    this.items = [];
    this.tmpItem = {};
  }
}
