import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Route, RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    code: new FormControl("", [Validators.required])
  });

  private loggedin: boolean;
  passwordForgot: boolean = false;
  codeSent: boolean = false;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  login() {
    if (!this.passwordForgot) {
      this.authService
        .login(this.form.get("email").value, this.form.get("password").value)
        .subscribe(responseData => {
          if (!responseData.userId) {
            alert("Invalid credentials");
            //Swal.fire("Good job!", "You clicked the button!", "success");
          }
          switch (responseData.role) {
            case "C":
              this.route.navigateByUrl("Customer");
              this.authService.setCredentials(
                responseData.userId,
                responseData.token,

                responseData.role,
                responseData.email
              );
              break;
              case "R":
              this.route.navigateByUrl("Receptionist");
              this.authService.setCredentials(
                responseData.userId,
                responseData.token,

                responseData.role,
                responseData.email
              );


              break;
          }
          console.log(responseData);
        });
    }
    if (this.passwordForgot) {
      this.authService
        .sendCode(this.form.get("email").value)
        .subscribe(responseData => {
          if (responseData.message == 0) {
            alert("Invalid Email");
            //Swal.fire("Good job!", "You clicked the button!", "success");
          } else {
            alert("Email sent successfully");
            this.passwordForgot = false;
          }
          console.log(responseData);
        });
    }
    //console.log(this.form.get("email").value + "123");
  }

  isLoggedIn() {
    return this.loggedin;
  }

  forgotpassword() {
    this.passwordForgot = true;
  }
}
