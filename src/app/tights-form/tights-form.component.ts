import { FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Cloth } from "../modules/Cloth";

@Component({
  selector: "app-tights-form",
  templateUrl: "./tights-form.component.html",
  styleUrls: ["./tights-form.component.css"]
})
export class TightsFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("title");
      //console.log(this.title);
      //console.log(params);
    });
  }

  addTights() {
    const cloth: Cloth = {
      category: this.title,
      name: this.form.get("name").value,
      MeasurementSC1: this.form.get("MeasurementSC1").value,
      MeasurementSC2: this.form.get("MeasurementSC2").value,
      MeasurementSH1: this.form.get("MeasurementSH1").value,
      MeasurementSH2: this.form.get("MeasurementSH2").value,
      MeasurementSW1: this.form.get("MeasurementSW1").value,
      MeasurementSW2: this.form.get("MeasurementSW2").value,
      MeasurementSQ: this.form.get("MeasurementSQ").value,
      MeasurementSP: this.form.get("MeasurementSP").value,
      MeasurementMC1: this.form.get("MeasurementMC1").value,
      MeasurementMC2: this.form.get("MeasurementMC2").value,
      MeasurementMH1: this.form.get("MeasurementMH1").value,
      MeasurementMH2: this.form.get("MeasurementMH2").value,
      MeasurementMW1: this.form.get("MeasurementMW1").value,
      MeasurementMW2: this.form.get("MeasurementMW2").value,
      MeasurementMQ: this.form.get("MeasurementMQ").value,
      MeasurementMP: this.form.get("MeasurementMP").value,
      MeasurementLC1: this.form.get("MeasurementLC1").value,
      MeasurementLC2: this.form.get("MeasurementLC2").value,
      MeasurementLH1: this.form.get("MeasurementLH1").value,
      MeasurementLH2: this.form.get("MeasurementLH2").value,
      MeasurementLW1: this.form.get("MeasurementLW1").value,
      MeasurementLW2: this.form.get("MeasurementLW2").value,
      MeasurementLQ: this.form.get("MeasurementLQ").value,
      MeasurementLP: this.form.get("MeasurementLP").value
    };

    this.productService.addTights(cloth);
  }
}
