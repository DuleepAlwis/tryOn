import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "../services/auth-guard";

import { CustomerProfileComponent } from "../customer-profile/customer-profile.component";
import { Routes, RouterModule } from "@angular/router";
import { CustomerNavigationComponent } from "../customer-navigation/customer-navigation.component";
import { Observable } from "rxjs";
import { ProductViewComponent } from "../product-view/product-view.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

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
      }
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
