import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "../services/auth-guard";
import { CustomerProfileComponent } from "../customer-profile/customer-profile.component";
import { Routes, RouterModule } from "@angular/router";
import { CustomerNavigationComponent } from "../customer-navigation/customer-navigation.component";
import { Observable } from "rxjs";
import { ProductViewComponent } from "../product-view/product-view.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { ResetCredentialsComponent } from '../reset-credentials/reset-credentials.component';
import { CustomerSearchProductComponent } from '../customer-search-product/customer-search-product.component';

/*import { OrdersComponent } from '../orders/orders.component';
import { OrderCustomerComponent } from '../order-customer/order-customer.component';*/

const customerRoutes: Routes = [
  {
    component: CustomerNavigationComponent,
    path: "Customer",
    canActivate: [AuthGuard],
    children: [
      {
        component: CustomerProfileComponent,
        path: "CustomerProfile",
        canActivate: [AuthGuard]
      },
       {
        component: ResetCredentialsComponent,
        path: "ResetCredentials",
        canActivate: [AuthGuard]
      },
      {
        component:CustomerSearchProductComponent,
        path: 'CustomerSearchProduct',
        canActivate: [AuthGuard]
      }
  /*{
    component : OrdersComponent,
    path : "Orderdetails",
    canActivate: [AuthGuard]
  },
  {
    component : OrderCustomerComponent,
    path : "OrderCustomer/:orderId",
    canActivate : [AuthGuard]
  }*/
    ]
  },
  {
    component: ProductViewComponent,
    path: "productview/:category/:id"
  },
  {
    component: ShoppingCartComponent,
    path: "shoppingcart/:category",
    canActivate: [AuthGuard]
  }


];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CustomerRoutesModule {}
