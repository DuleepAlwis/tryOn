import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Customer } from "../../modules/Customer";
import { PasswordValidator } from 'src/app/validators';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})


export class RegisterComponent implements OnInit {


  ngOnInit() {}

  constructor(private authService: AuthService) {}
   
  
  // matching passwords validation
   matching_passwords_group = new FormGroup({
    password: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
    confirmpassword: new FormControl('', Validators.required)}, 
    (formGroup: FormGroup) => {
    return PasswordValidator.areEqual(formGroup);
  });

  //user validation
  form1 = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    firstName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("[A-Za-z]*")])),
    lastName: new FormControl('', Validators.compose([Validators.required,Validators.pattern("[A-Za-z]*")])),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('',Validators.compose( [Validators.required,Validators.minLength(6)])),
    confirmpassword:new FormControl(),
    matching_passwords: this.matching_passwords_group,
    terms: new FormControl(false, Validators.pattern('true'))
  } );

  firstNameInValid() {
    return this.form1.get("firstName").invalid;
  }

  lastNameInValid() {
    return this.form1.get("lastName").invalid;
  }

  emailInValid() {
    return this.form1.get("email").invalid;
  }

  passwordInValid() {
    return this.form1.get("password").invalid;
  }
 

  signup() {
    if (
      !(this.firstNameInValid() && this.lastNameInValid() && this.emailInValid() && this.passwordInValid())
    ) {
      console.log(
        this.form1.get("firstName").value + " " + this.form1.get("gender").value
      );
      let customer: Customer = {
          firstName: this.form1.get("firstName").value,
          lastName: this.form1.get("firstName").value,
          email: this.form1.get("email").value,
          password: this.form1.get("password").value,
          gender: this.form1.get("gender").value
    //     address: this.form.get("address").value,
    //     city: this.form.get("city").value,
    //     district: this.form.get("district").value,
    //     mobileno: this.form.get("mobileno").value,
        

      };
      console.log(customer);
      this.authService.signup(customer);
   }
      
   }
   

  }