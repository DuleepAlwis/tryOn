import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home-navigation",
  templateUrl: "./home-navigation.component.html",
  styleUrls: ["./home-navigation.component.css"]
})
export class HomeNavigationComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.form.get("email").value + "123");
  }
}
