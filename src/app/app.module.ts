import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeNavigationComponent
  ],
  imports: [
    BrowserModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
