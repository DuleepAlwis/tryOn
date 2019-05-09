import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  private url = "http://localhost:3000";
  items = [];
  tmpItem = {};
  totalPrice: string = "0";
  deliveryDetails: Object;
  constructor(private http: HttpClient) {
    this.items = localStorage.length>2 ? this.extractObjects(localStorage.getItem("items")): [];
    this.tmpItem =
      localStorage.length>2 && localStorage.getItem("tmpItem") == null
        ? {}
        : JSON.parse(localStorage.getItem("tmpItem"));
    this.totalPrice =
    (localStorage.getItem("totalPrice") == null || localStorage.getItem("totalPrice")=="NaN")
        ? "0"
        : localStorage.getItem("totalPrice");
        console.log("---------------");
        console.log(this.totalPrice);
        console.log(localStorage);
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

  setTotalPrice(totalPrice:string)
  {
    localStorage.removeItem("totalPrice");

    localStorage.setItem("totalPrice", totalPrice);
    this.totalPrice = totalPrice;
    console.log(this.totalPrice);
  }

  saveOrder(email:string,delivery: Object,customerId:string) {
    let date = new Date();
    let orderDate =
      date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    let time = date.getHours()+":"+date.getMinutes() ;
    console.log(delivery);

    return this.http.post<{ message: Number }>(this.url + "/api/order/addOrder", {
      items: JSON.stringify(this.itemsSerializeValues()),
      delivery: JSON.stringify(delivery),
      date:orderDate,
      time:time,
      dueDate:"2 weeks",
      totalPrice:this.totalPrice,
      email:email,
      customerId:customerId
    });

  }

  itemQuantityUpdate()
  {
    let products = [Object];
    let i = 0;
    for(i=0;i<this.items.length;i++)
    {
      let tmp = this.items[i];
      products.push({category:tmp.category,id:tmp.productId,quantity:tmp.quantity});
    }
    this.http.post<{message:Number}>(this.url+"/api/order/quantityUpdate",{products:JSON.stringify(this.items),count:products.length}).subscribe(
      responseData => {
        if(responseData.message==0)
        {
          console.log("WRONG");
        }
        else
        {
          console.log("OK");
        }
      }
    );
  } 

  calculateDeliveryDate(orderDate: string)
  {
    const date = orderDate.split("-");
    let day: Number = 0;
    let month: Number = 0;
    let year: Number = 0;
    day = parseInt(date[2])+14;

  }

  itemsSerializeValues()
  {
    let i = 0;
    let result = [];
    for(i=0;i<this.items.length;i++)
    {
      result.push(JSON.stringify(this.items[i]));
    }
    return result;
  }

  clearLocalStorage() {
    let i = 0;
    //console.log("Shopping cart" + " " + localStorage.length);
    console.log(localStorage);
    localStorage.removeItem("items");
    localStorage.removeItem("tmpItem");
    localStorage.removeItem("totalPrice");
    /*for (i = 0; i < localStorage.length + 1; i++) {
      console.log(localStorage.key(i));
      localStorage.removeItem(localStorage.key(i));
    }*/
    console.log("LocalStoarage"+" "+localStorage.getItem("totalPrice"));
    return true;
  }

  clearCart() {
    this.items = [];
    this.tmpItem = {};
  }
}
