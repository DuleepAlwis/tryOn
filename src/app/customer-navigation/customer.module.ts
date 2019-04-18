import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerRoutesModule } from "./customer-routes.module";
import { CustomerNavigationComponent } from "./customer-navigation.component";
import { CustomerProfileComponent } from "../customer-profile/customer-profile.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@NgModule({
  declarations: [
    CustomerNavigationComponent,
    CustomerProfileComponent,
    ShoppingCartComponent
  ],
  imports: [CommonModule, CustomerRoutesModule, ReactiveFormsModule]
})
export class CustomerModule {}
