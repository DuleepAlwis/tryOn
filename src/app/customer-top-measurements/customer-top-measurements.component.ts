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
  form = new FormGroup({
    neck: new FormControl(null, [Validators.required]),
    shoulder: new FormControl(null, [Validators.required]),
    bicep: new FormControl(null, [Validators.required]),
    jacket: new FormControl(null, [Validators.required]),
    sleeve: new FormControl(null, [Validators.required]),
    chest: new FormControl(null, [Validators.required]),
    stomach: new FormControl(null, [Validators.required])
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