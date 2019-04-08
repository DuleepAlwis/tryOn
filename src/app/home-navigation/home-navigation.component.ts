import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
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

  private loggedin: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(
      this.form.get("email").value,
      this.form.get("password").value
    );

    console.log(this.form.get("email").value + "123");
  }

  isLoggedIn() {
    return this.loggedin;
  }
}
