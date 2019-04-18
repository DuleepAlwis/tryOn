import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";
import { AuthService } from "./services/auth.service";
import { ProductService } from "./services/product.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
//import { ReceptionistNavigationComponent } from "./receptionist-navigation/receptionist-navigation.component";
import { ProductsComponent } from "./products/products.component";
//import { ReceptionistProductsComponent } from "./receptionist-products/receptionist-products.component";
/*import { MenSuitsFormComponent } from "./men-suits-form/men-suits-form.component";
import { TightsFormComponent } from "./tights-form/tights-form.component";
import { AccessoriesFormComponent } from "./accessories-form/accessories-form.component";*/
//import { ReceprionistProductsEditComponent } from "./receprionist-products-edit/receprionist-products-edit.component";
import { ReceptionistProductsModule } from "./receptionist-products/receptionist-products.module";
import { CustomerModule } from "./customer-navigation/customer.module";
import { LoginComponent } from "./login/login.component";
//import { CustomerNavigationComponent } from './customer-navigation/customer-navigation.component';
//import { CustomerProfileComponent } from "./customer-profile/customer-profile.component";
import { AuthGuard } from "./services/auth-guard";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ShoppingCartService } from "./services/shopping-cart.service";
//import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
//import { ProductViewComponent } from "./product-view/product-view.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavigationComponent,
    RegisterComponent,
    //ReceptionistNavigationComponent,
    ProductsComponent,
    LoginComponent,
    ProductViewComponent
    //ShoppingCartComponent
    //ReceptionistProductsComponent,
    /*MenSuitsFormComponent,
    TightsFormComponent,
    AccessoriesFormComponent,*/
    //ReceprionistProductsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReceptionistProductsModule,
    CustomerModule,
    RouterModule.forRoot([
      {
        component: HomeComponent,
        // tslint:disable-next-line:quotemark
        path: ""
      },
      {
        component: RegisterComponent,
        path: "Register"
      },
      {
        component: ProductsComponent,
        path: "Products"
      },
      {
        component: LoginComponent,
        path: "login"
      }

      /*{
        component: ReceprionistProductsEditComponent,
        path: "Receptionistproductedit"
      }
      /*  {
        component: ReceptionistProductsComponent,
        path: "Receptionist",
        children: [
          {
            component: MenSuitsFormComponent,
            path: "suitform/:title",
            outlet: "addProducts"
          },
          {
            path: "tightsform/:title",
            component: TightsFormComponent,
            outlet: "addProducts"
          },
          {
            component: AccessoriesFormComponent,
            path: "accessoriesform/:title"/*,
            outlet: "addProducts"*/
      /*  }
        ]
      },*/
      /*{
        path: "aaa",
        component: TightsFormComponent,
        outlet: "addProducts"
      }*/
    ])
  ],
  providers: [AuthService, ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
