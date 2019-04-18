import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cloth-edit",
  templateUrl: "./cloth-edit.component.html",
  styleUrls: ["./cloth-edit.component.css"]
})
export class ClothEditComponent implements OnInit {
  title: string = "";
  clothes: boolean;
  tights: boolean;
  accessories: boolean;
  formCloth = new FormGroup({
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
  productId: string;
  type: string;
  category: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get("productId");
      this.type = params.get("type");
      this.category = params.get("category");
      switch (this.type) {
        case "clothes":
          this.clothes = true;
          break;
        case "tights":
          this.tights = true;
          break;
        case "accessories":
          this.accessories = true;
          break;
      }
      //console.log(this.title);
      //console.log(params);
    });
  }
}
