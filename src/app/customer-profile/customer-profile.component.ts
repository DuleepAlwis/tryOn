import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CustomerService } from "../services/customer.service";

import { Customer } from "../modules/Customer";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.component.html",
  styleUrls: ["./customer-profile.component.css"]
})
export class CustomerProfileComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("A-Za-z")
    ]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    mobileno: new FormControl("", [Validators.required]),

    gender: new FormControl("", [Validators.required])
  });

  private email: string;
  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService
      .getCustomerProfile(this.authService.getUserId())
      .subscribe(responseData => {
        //console.log(responseData);
        if (responseData.message == 0) {
          this.router.navigate(["/"]);
        } else {
          console.log(responseData.result);
          this.form.patchValue({
            name: responseData.result.name,
            address: responseData.result.address,
            city: responseData.result.city,
            district: responseData.result.district,
            mobileno: responseData.result.mobileno,

            gender: responseData.result.gender
          });
        }
      });
  }

  nameInValid() {
    return this.form.get("name").invalid;
  }

  update() {
    if (this.nameInValid()) {
      console.log(
        this.form.get("name").value + " " + this.form.get("city").value
      );
      let customer = {
        email: this.email,
        name: this.form.get("name").value,
        address: this.form.get("address").value,
        city: this.form.get("city").value,
        district: this.form.get("district").value,
        mobileno: this.form.get("mobileno").value,

        gender: this.form.get("gender").value
      };
      console.log(customer);
      this.customerService
        .updateProfile(this.authService.getUserId(), customer)
        .subscribe(responseData => {
          if (responseData.message == 0) {
            alert("Something wrong.......");
          } else {
            alert("Profile updated successfully.......");
            // console.log(responseData);
            this.form.patchValue({
              name: responseData.result.name,
              address: responseData.result.address,
              city: responseData.result.city,
              district: responseData.result.district,
              mobileno: responseData.result.mobileno,
              gender: responseData.result.gender
            });
          }
        });
    }
  }
}
