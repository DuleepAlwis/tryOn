import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
  
    email: new FormControl(null, [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl(null, [Validators.required,Validators.minLength(6)]),})

 

  ngOnInit() {
  }
  

  constructor(
      private router: Router,
      private authService: AuthService) {
  }

  
  logout() {
      // this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  
}
