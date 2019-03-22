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
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { ReceptionistNavigationComponent } from "./receptionist-navigation/receptionist-navigation.component";
import { ProductsComponent } from "./products/products.component";
import { ReceptionistProductsComponent } from "./receptionist-products/receptionist-products.component";
import { MenSuitsFormComponent } from "./men-suits-form/men-suits-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeNavigationComponent,
    ReceptionistNavigationComponent,
    ProductsComponent,
    ReceptionistProductsComponent,
    MenSuitsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
        component: ReceptionistProductsComponent,
        path: "Receptionist"
      },
      {
        component: MenSuitsFormComponent,
        path: "mensform",
        outlet: "receptionistProducts"
      }
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
