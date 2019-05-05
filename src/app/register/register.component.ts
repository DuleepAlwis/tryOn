import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Customer } from "../modules/Customer";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    mobileno: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required])
  });

  districts = ["Ampara", "Anuradhapura","Badulla","Batticaloa","Colombo","Galle","Gampaha",
  "Hambantota","Jaffna", "Kalutara","Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale",
  "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura",
  "Trincomalee", "Vavuniya"];
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  nameInValid() {
    console.log(this.form.get("name").invalid);
    return this.form.get("name").invalid;
  }

  emailInValid() {
    return this.form.get("email").invalid;
  }

  passwordInValid() {
    return this.form.get("password").invalid;
  }

  signup() {
    if (
      (this.nameInValid())
    ) {
      console.log(
        this.form.get("name").value + " " + this.form.get("city").value
      );
      alert("Something wrong with the name");
    }
    else if(this.passwordInValid())
    {
      alert("Something wrong with the password");

    }
    else if(this.emailInValid())
    {
      alert("Something wrong with the email");

    }
      else
      {


      let customer: Customer = {
        name: this.form.get("name").value,
        address: this.form.get("address").value,
        city: this.form.get("city").value,
        district: this.form.get("district").value,
        mobileno: this.form.get("mobileno").value,
        email: this.form.get("email").value,
        password: this.form.get("password").value,
        gender: this.form.get("gender").value
      };
      console.log(customer);
      this.authService.signup(customer);
    }
  }
}
