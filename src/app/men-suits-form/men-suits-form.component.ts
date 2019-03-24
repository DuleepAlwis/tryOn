import { FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-men-suits-form",
  templateUrl: "./men-suits-form.component.html",
  styleUrls: ["./men-suits-form.component.css"]
})
export class MenSuitsFormComponent implements OnInit {
  form = new FormGroup({
    description: new FormControl("", Validators.required),
    MeasurementSC1: new FormControl("", Validators.required),
    MeasurementSC2: new FormControl("", Validators.required),
    MeasurementSH1: new FormControl("", Validators.required),
    MeasurementSH2: new FormControl("", Validators.required),
    MeasurementSW1: new FormControl("", Validators.required),
    MeasurementSW2: new FormControl("", Validators.required),
    MeasurementSQ: new FormControl("", Validators.required),
    MeasurementSP: new FormControl("", Validators.required),
    MeasurementMC1: new FormControl("", Validators.required),
    MeasurementMC2: new FormControl("", Validators.required),
    MeasurementMH1: new FormControl("", Validators.required),
    MeasurementMH2: new FormControl("", Validators.required),
    MeasurementMW1: new FormControl("", Validators.required),
    MeasurementMW2: new FormControl("", Validators.required),
    MeasurementMQ: new FormControl("", Validators.required),
    MeasurementMP: new FormControl("", Validators.required),
    MeasurementLC1: new FormControl("", Validators.required),
    MeasurementLC2: new FormControl("", Validators.required),
    MeasurementLH1: new FormControl("", Validators.required),
    MeasurementLH2: new FormControl("", Validators.required),
    MeasurementLW1: new FormControl("", Validators.required),
    MeasurementLW2: new FormControl("", Validators.required),
    MeasurementLQ: new FormControl("", Validators.required),
    MeasurementLP: new FormControl("", Validators.required)
  });

  title: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("title");
      //console.log(this.title);
      //console.log(params);
    });
  }
}
