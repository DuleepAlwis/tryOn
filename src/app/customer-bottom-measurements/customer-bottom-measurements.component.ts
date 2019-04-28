import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-customer-bottom-measurements',
  templateUrl: './customer-bottom-measurements.component.html',
  styleUrls: ['./customer-bottom-measurements.component.css']
})
export class CustomerBottomMeasurementsComponent implements OnInit {


  form2 = new FormGroup({
    pWaist: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    hips: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    pLength: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    crotch: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    thigh: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    knee: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
  });

  submitForms = function() {
      document.forms["form1"].submit();
      document.forms["form2"].submit();
      return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
