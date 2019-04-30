import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Orders } from '../modules/Orders';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // tslint:disable-next-line:quotemark
  orders: Array<Orders>;
  message: string = " ";
  constructor(private authService: AuthService, private orderService: OrderService) { }

  ngOnInit() {
    if(this.authService.getRole()=="C")
    {
      this.orderService.getAllCustomerOrders(this.authService.getUserId()).subscribe(responseData => {
        if(responseData.message===0) {
          this.message = "No orders";
        }
        else {
         // console.log(responseData.result);
          this.orders = responseData.result;
          //console.log(this.orders);
        }
      });
    }

    if(this.authService.getRole()=="R")
    {
      this.orderService.getAllOrders().subscribe(responseData => {
        if(responseData.message===0) {
          this.message = "No orders";
        }
        else {
         // console.log(responseData.result);
          this.orders = responseData.result;
          //console.log(this.orders);
        }
      });
    }

  }

  getRole()
  {
    return this.authService.getRole();
  }

}
