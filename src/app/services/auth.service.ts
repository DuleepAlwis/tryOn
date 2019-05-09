import { Injectable } from "@angular/core";
import { AuthData } from "../modules/AuthData";
import {
  HttpClient,
  HttpParams,
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";
//import Swal from "sweetalert2/dist/sweetalert2.min.js";
/*import swal from "sweetalert2";
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.min.js";*/
import { Customer } from "../modules/Customer";
import { NavigationStart, Router } from "@angular/router";
import { browser } from "protractor";
import { Subscription } from "rxjs";
import { ShoppingCartService } from "./shopping-cart.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:3000";
  private role: string = "H";
  private userId: string;
  private token: string;
  private email:string;
  private isAuthenticated: boolean = false;
  private subscription: Subscription;
  private browserRefresh: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) {
    this.subscription = router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !router.navigated;
        console.log("Navigated" + this.browserRefresh);
      }
    });
    this.userId = localStorage.length>0 ? localStorage.getItem("id") : "";
    this.role  = localStorage.getItem("role")==null?"H": localStorage.getItem("role");
    //this.role = localStorage.length>0 ? localStorage.getItem("role") : "H";
    this.token = localStorage.length>0
      ? localStorage.getItem("token")
      : "";
  }

  setCredentials(userId: string, token: string, role: string,email:string) {
    this.role = role;
    this.userId = userId;
    this.token = token;
    this.email = email;
    console.log(this.email);
    this.isAuthenticated = true;
    localStorage.setItem("id", this.userId);
    localStorage.setItem("token", this.token);
    localStorage.setItem("role",this.role);
  }

  logout() {
    this.role = "H";
    this.userId = "";
    this.token = "";
    this.email = "";
    this.isAuthenticated = false;
    localStorage.clear();
    //this.clearLocalStorage();

    if(this.shoppingCartService.clearLocalStorage())
  {
    this.router.navigate(["/"]);

  }
  }

  getUserId() {
    return this.userId;
  }
  getToken() {
    return this.token;
  }

  setToken(token:string)
  {
    this.token = token;
  }

  setEmail(email:string)
  {
    this.email = email;
  }

  getEmail()
  {
    return this.email;
  }

  getRole()
  {
    return this.role;
  }

  getIsAuth() {
    return this.isAuthenticated || localStorage.getItem("token") != null;
  }
  login(email: string, password: string) {
    const authData = { email: email, password: password };
    console.log(authData);
    return this.http.post<{
      userId: string;
      role: string;
      token: string;
      email:string;
      message: Number;
    }>(this.url + "/api/user/login", authData);
  }

  signup(customer: Customer) {
    this.http
      .post<{ message: Number; obg: object }>(
        this.url + "/api/user/signup",
        customer
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Registration success");
        }
      });
  }

  sendCode(email: string) {
    return this.http.post<{ message: Number }>(
      this.url + "/api/user/forgotPassword",
      { email: email }
    );
  }

  clearLocalStorage() {
    let i = 0;
    console.log(localStorage.length);
    for (i = 0; i < localStorage.length + 1; i++) {
      console.log(localStorage.key(i));
      localStorage.removeItem(localStorage.key(i));
    }
    this.router.navigate(["/"]);
  }

  resetEmail(email:string)
  {
    return this.http.post<{message:Number,email:string}>(this.url+"/api/user/resetEmail",{email:email,id:this.userId});
  }

   resetPassword(password:string)
  {
    return this.http.post<{message:Number}>(this.url+"/api/user/resetPassword",{password:password,id:this.userId});
  }
}
