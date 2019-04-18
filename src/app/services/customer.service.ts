import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../modules/Customer";
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCustomerProfile(userId: string) {
    return this.http.post<{ message: Number; result: Object }>(
      this.url + "/api/customer/getProfile",
      { id: userId }
    );
  }

  updateProfile(id: string, customer: Customer) {
    console.log(customer);
    return this.http.post<{ message: Number; result: object }>(
      this.url + "/api/customer/updateProfile",
      { id: id, data: customer }
    );
  }
}
