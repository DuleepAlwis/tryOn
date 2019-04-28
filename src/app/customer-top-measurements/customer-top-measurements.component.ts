import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @NgbModal({
//   ...
//   imports: [NgbModal, ...],
//   ...
// })

@Component({
  selector: 'app-measurements-table',
  templateUrl: './customer-top-measurements.component.html',
  styleUrls: ['./customer-top-measurements.component.css']
})
export class MeasurementsTableComponent implements OnInit {
  form1 = new FormGroup({
    neck: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    shoulder: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    bicep: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    jacket: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    sleeve: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    chest: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    stomach: new FormControl(null, [Validators.required,Validators.maxLength(3)])
  });


  ngOnInit() {
  }

  closeResult: string;

  // constructor(private modalService: NgbModal) {}

//   openBackDropCustomClass(content) {
//     open(content) {
//       this.modalService.open(content, { size: 'sm' });
//     } 
//  }
}

export class NgbdModalOptions {
  
}