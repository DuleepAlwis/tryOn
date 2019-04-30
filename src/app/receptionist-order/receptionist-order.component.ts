import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Orders } from '../modules/Orders';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-receptionist-order',
  templateUrl: './receptionist-order.component.html',
  styleUrls: ['./receptionist-order.component.css']
})
export class ReceptionistOrderComponent implements OnInit {

  orders: Array<Orders>;
  message: string = " ";
  constructor(private authService: AuthService, private orderService: OrderService) { }

  ngOnInit() {
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

}
