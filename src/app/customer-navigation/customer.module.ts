import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutesModule } from './customer-routes.module';
import { CustomerNavigationComponent } from './customer-navigation.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ResetCredentialsComponent } from '../reset-credentials/reset-credentials.component';
import { CustomerSearchProductComponent } from '../customer-search-product/customer-search-product.component';

//import { OrdersComponent } from '../orders/orders.component';
//import { OrderCustomerComponent } from '../order-customer/order-customer.component';

@NgModule({
  declarations: [
    CustomerNavigationComponent,
    CustomerProfileComponent,
    ShoppingCartComponent,
    ResetCredentialsComponent,
    CustomerSearchProductComponent
//    OrdersComponent,
// OrderCustomerComponent
  ],
  imports: [CommonModule, CustomerRoutesModule, ReactiveFormsModule]
})
export class CustomerModule {}
