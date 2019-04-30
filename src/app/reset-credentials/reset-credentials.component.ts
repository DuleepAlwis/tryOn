import { Component, OnInit } from '@angular/core';
import { FormControl, Form, Validators, FormGroup } from '@angular/forms';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-reset-credentials',
  templateUrl: './reset-credentials.component.html',
  styleUrls: ['./reset-credentials.component.css']
})
export class ResetCredentialsComponent implements OnInit {

 formCredentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getEmail());
    this.formCredentials.patchValue({
      email: this.authService.getEmail()
    });
  }

  emailChange()
  {
    if(!this.formCredentials.get("email").invalid)
    {
    this.authService.resetEmail(this.formCredentials.get("email").value).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert("Something wrong, email didn't updated");
      }
      else
      {
        alert("Email updated");
        this.authService.setEmail(responseData.email);
      }
    });

    }
    else
    {
      alert("Something wrong, Email field is empty");
    }
  }

  passwordChange()
  {
    if(!this.formCredentials.get("password").invalid)
    {
    this.authService.resetPassword(this.formCredentials.get("password").value).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert("Something wrong, password didn't updated");
      }
      else
      {
                //this.authService.setToken(responseData.token);

        alert("Password updated");

      }
    });

    }
    else
    {
      alert("Something wrong, Email field is empty");
    }
  }

}
