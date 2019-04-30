import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../modules/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllCustomerOrders(id: string)
  {
    //console.log("AAA");
    return this.http.post<{message: Number, result: Array<Orders>}>(this.url + "/api/order/retrieveCustomerOrders",{id:id});
  }

  getOrder(id:string)
  {
    return this.http.post<{message:Number,result:Orders}>(this.url+"/api/order/getOrder",{id:id});
  }

  getAllOrders()
  {
    return this.http.post<{message:Number,result:Array<Orders>}>(this.url+"/api/order/getAllOrder",{});
  }
}
