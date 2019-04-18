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
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:3000";
  private role: string;
  private userId: string;
  private token: string;
  private isAuthenticated: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  setCredentials(userId: string, token: string, role: string) {
    this.role = role;
    this.userId = userId;
    this.token = token;
    this.isAuthenticated = true;
  }

  logout() {
    this.role = "";
    this.userId = "";
    this.token = "";
    this.isAuthenticated = false;
    this.router.navigate(["/"]);
  }

  getUserId() {
    return this.userId;
  }
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  login(email: string, password: string) {
    const authData = { email: email, password: password };
    console.log(authData);
    return this.http.post<{
      userId: string;
      role: string;
      token: string;
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
}
