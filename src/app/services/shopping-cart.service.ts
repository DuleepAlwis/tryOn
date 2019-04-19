import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  private url = "http://localhost:3000";
  items = [];
  tmpItem = {};
  totalPrice: string;
  deliveryDetails: Object;
  constructor(private http: HttpClient) {
    this.items = this.extractObjects(localStorage.getItem("items"));
    this.tmpItem =
      localStorage.getItem("tmpItem") == null
        ? {}
        : JSON.parse(localStorage.getItem("tmpItem"));
    this.totalPrice =
      localStorage.getItem("totalPrice") == null
        ? "0"
        : JSON.parse(localStorage.getItem("totalPrice"));
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
    localStorage.setItem("totalPrice", this.totalPrice);
  }

  addToShoppingCart(item: Object) {
    this.items.push(item);
    this.addToLocalStorage();
    this.tmpItem = {};
    localStorage.removeItem("tmpItem");
    localStorage.removeItem("totalPrice");

    localStorage.setItem("totalPrice", this.totalPrice);

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
    console.log(localStorage.length + " " + localStorage);
  }

  setDeliveryDetails(details: Object) {
    this.deliveryDetails = details;
  }

  saveOrder(delivery: Object<any>) {
    let date = new Date();
    let orderDate =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    let time = ;
    this.http.post<{ message: Number }>(this.url + "/api/Order/addOrder", {
      items: this.items,
      delivery: delivery
    });
  }

  clearLocalStorage() {
    let i = 0;
    //console.log("Shopping cart" + " " + localStorage.length);
    console.log(localStorage);
    localStorage.removeItem("items");
    localStorage.removeItem("tmpItem");
    localStorage.removeItem("totalPrice");
    for (i = 0; i < localStorage.length + 1; i++) {
      console.log(localStorage.key(i));
      localStorage.removeItem(localStorage.key(i));
    }
    console.log(localStorage);
  }

  clearCart() {
    this.items = [];
    this.tmpItem = {};
  }
}
