import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("A-Za-z")
    ]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    mobileno: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });
  constructor() {}

  ngOnInit() {}
}
