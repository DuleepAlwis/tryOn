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

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const authData = { email: email, password: password };
    console.log(authData);
    this.http
      .post<{ message: Number }>(this.url + "/api/user/login", authData)
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Invalid credentials");
          //Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(responseData);
      });
  }

  signup(customer: Customer) {
    this.http
      .post<{ message: Number; obg: object }>(
        this.url + "/api/customer/signup",
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
}
