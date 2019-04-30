import { FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Cloth } from "../modules/Cloth";
import { mimeType } from "../cloth-edit/mime-type.validator";
@Component({
  selector: "app-men-suits-form",
  templateUrl: "./men-suits-form.component.html",
  styleUrls: ["./men-suits-form.component.css"]
})
export class MenSuitsFormComponent implements OnInit {
 /* form = new FormGroup({
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
  });*/

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    MeasurementSNeck1: new FormControl("", Validators.required),
    MeasurementSNeck2: new FormControl("", Validators.required),
    MeasurementSShoulderW1: new FormControl("", Validators.required),
    MeasurementSShoulderW2: new FormControl("", Validators.required),
    MeasurementSBicep1: new FormControl("", Validators.required),
    MeasurementSBicep2: new FormControl("", Validators.required),
    MeasurementSJacketL1: new FormControl("", Validators.required),
    MeasurementSJacketL2: new FormControl("", Validators.required),
    MeasurementSSleeveL1: new FormControl("", Validators.required),
    MeasurementSSleeveL2: new FormControl("", Validators.required),
    MeasurementSChest1: new FormControl("", Validators.required),
    MeasurementSChest2: new FormControl("", Validators.required),
    MeasurementSStomach1: new FormControl("", Validators.required),
    MeasurementSStomach2: new FormControl("", Validators.required),

    MeasurementMNeck1: new FormControl("", Validators.required),
    MeasurementMNeck2: new FormControl("", Validators.required),
    MeasurementMShoulderW1: new FormControl("", Validators.required),
    MeasurementMShoulderW2: new FormControl("", Validators.required),
    MeasurementMBicep1: new FormControl("", Validators.required),
    MeasurementMBicep2: new FormControl("", Validators.required),
    MeasurementMJacketL1: new FormControl("", Validators.required),
    MeasurementMJacketL2: new FormControl("", Validators.required),
    MeasurementMSleeveL1: new FormControl("", Validators.required),
    MeasurementMSleeveL2: new FormControl("", Validators.required),
    MeasurementMChest1: new FormControl("", Validators.required),
    MeasurementMChest2: new FormControl("", Validators.required),
    MeasurementMStomach1: new FormControl("", Validators.required),
    MeasurementMStomach2: new FormControl("", Validators.required),
    MeasurementLNeck1: new FormControl("", Validators.required),
    MeasurementLNeck2: new FormControl("", Validators.required),
    MeasurementLShoulderW1: new FormControl("", Validators.required),
    MeasurementLShoulderW2: new FormControl("", Validators.required),
    MeasurementLBicep1: new FormControl("", Validators.required),
    MeasurementLBicep2: new FormControl("", Validators.required),
    MeasurementLJacketL1: new FormControl("", Validators.required),
    MeasurementLJacketL2: new FormControl("", Validators.required),
    MeasurementLSleeveL1: new FormControl("", Validators.required),
    MeasurementLSleeveL2: new FormControl("", Validators.required),
    MeasurementLChest1: new FormControl("", Validators.required),
    MeasurementLChest2: new FormControl("", Validators.required),
    MeasurementLStomach1: new FormControl("", Validators.required),
    MeasurementLStomach2: new FormControl("", Validators.required),
    MeasurementSQ: new FormControl("", Validators.required),
    MeasurementSP: new FormControl("", Validators.required),
    MeasurementMQ: new FormControl("", Validators.required),
    MeasurementMP: new FormControl("", Validators.required),
    MeasurementLQ: new FormControl("", Validators.required),
    MeasurementLP: new FormControl("", Validators.required)
  });



  imageFrontPreview: string;
  formFrontImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageLeftPreview: string;
  formLeftImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageRightPreview: string;
  formRightImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageBackPreview: string;
  formBackImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  title: string;
  newProduct: boolean = true;
  imgFrontPath: string;
  imgBackPath: string;
  imgLeftPath: string;
  imgRightPath: string;
  @Input("productId") productId: string;
  @Input("type") category: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("title");
      //console.log(this.title);
      //console.log(params);
      console.log("IBH" + " " + this.productId);
      if (this.productId && this.category) {
        this.newProduct = false;
        this.retrieveProduct(this.productId, this.category);
      }
    });
  }

  /*@Input()
  setUpdate(id: string, type: string) {
    this.productId = id;
    this.title = type;
    console.log("AZX" + id);
    this.getProduct(id, type);
  }*/

  getProduct(id: string, type: string) {}
  frontImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    /* if (!this.formFrontImage.get("image").valid) {
      console.log(this.formFrontImage.get("image").valid);
      return false;
    }*/
    this.formFrontImage.patchValue({ image: file });
    this.formFrontImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageFrontPreview = reader.result;
      //  console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  leftImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formLeftImage.patchValue({ image: file });
    this.formLeftImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageLeftPreview = reader.result;
      //console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  rightImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formRightImage.patchValue({ image: file });
    this.formRightImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageRightPreview = reader.result;
      //console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  backImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formBackImage.patchValue({ image: file });
    this.formBackImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageBackPreview = reader.result;
      //  console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  UploadImage(type: string) {
    switch (type) {
      case "Front":
        console.log(this.formFrontImage.value.image.name);
        this.productService.saveClothImage(
          this.productId,
          "Front",
          this.formFrontImage.value.image,
          this.formFrontImage.value.image.name
        );
        break;
      case "Back":
        this.productService.saveClothImage(
          this.productId,
          "Back",
          this.formBackImage.value.image,
          this.formBackImage.value.image.name
        );
        break;
      case "Left":
        this.productService.saveClothImage(
          this.productId,
          "Left",
          this.formLeftImage.value.image,
          this.formLeftImage.value.image.name
        );
        break;
      case "Right":
        this.productService.saveClothImage(
          this.productId,
          "Right",
          this.formRightImage.value.image,
          this.formRightImage.value.image.name
        );
        break;
    }
    setTimeout(() => {
      this.getClothImages();
    }, 11000);
  }


  addCloth() {
    console.log("AAA");
    const cloth: Cloth = {
      category: this.title,
      name: this.form.get('name').value,
      MeasurementSNeck1: this.form.get('MeasurementSNeck1').value,
      MeasurementSNeck2: this.form.get('MeasurementSNeck2').value,
      MeasurementSShoulderW1: this.form.get("MeasurementSShoulderW1").value,
      MeasurementSShoulderW2: this.form.get("MeasurementSShoulderW2").value,
      MeasurementSBicep1: this.form.get("MeasurementSBicep1").value,
      MeasurementSBicep2: this.form.get("MeasurementSBicep2").value,
      MeasurementSJacketL1: this.form.get("MeasurementSJacketL1").value,
      MeasurementSJacketL2: this.form.get("MeasurementSJacketL2").value,
      MeasurementSSleeveL1: this.form.get("MeasurementSSleeveL1").value,
      MeasurementSSleeveL2: this.form.get("MeasurementSSleeveL2").value,
      MeasurementSChest1: this.form.get("MeasurementSChest1").value,
      MeasurementSChest2: this.form.get("MeasurementSChest2").value,
      MeasurementSStomach1: this.form.get("MeasurementSStomach1").value,
      MeasurementSStomach2: this.form.get("MeasurementSStomach2").value,

      MeasurementMNeck1: this.form.get("MeasurementMNeck1").value,
      MeasurementMNeck2: this.form.get("MeasurementMNeck2").value,
      MeasurementMShoulderW1: this.form.get("MeasurementMShoulderW1").value,
      MeasurementMShoulderW2: this.form.get("MeasurementMShoulderW2").value,
      MeasurementMBicep1: this.form.get("MeasurementMBicep1").value,
      MeasurementMBicep2: this.form.get("MeasurementMBicep2").value,
      MeasurementMJacketL1: this.form.get("MeasurementMJacketL1").value,
      MeasurementMJacketL2: this.form.get("MeasurementMJacketL2").value,
      MeasurementMSleeveL1: this.form.get("MeasurementMSleeveL1").value,
      MeasurementMSleeveL2: this.form.get("MeasurementMSleeveL2").value,
      MeasurementMChest1: this.form.get("MeasurementMChest1").value,
      MeasurementMChest2: this.form.get("MeasurementMChest2").value,
      MeasurementMStomach1: this.form.get("MeasurementMStomach1").value,
      MeasurementMStomach2: this.form.get("MeasurementMStomach2").value,

      MeasurementLNeck1: this.form.get("MeasurementLNeck1").value,
      MeasurementLNeck2: this.form.get("MeasurementLNeck2").value,
      MeasurementLShoulderW1: this.form.get("MeasurementLShoulderW1").value,
      MeasurementLShoulderW2: this.form.get("MeasurementLShoulderW2").value,
      MeasurementLBicep1: this.form.get("MeasurementLBicep1").value,
      MeasurementLBicep2: this.form.get("MeasurementLBicep2").value,
      MeasurementLJacketL1: this.form.get("MeasurementLJacketL1").value,
      MeasurementLJacketL2: this.form.get("MeasurementLJacketL2").value,
      MeasurementLSleeveL1: this.form.get("MeasurementLSleeveL1").value,
      MeasurementLSleeveL2: this.form.get("MeasurementLSleeveL2").value,
      MeasurementLChest1: this.form.get("MeasurementLChest1").value,
      MeasurementLChest2: this.form.get("MeasurementLChest2").value,
      MeasurementLStomach1: this.form.get("MeasurementLStomach1").value,
      MeasurementLStomach2: this.form.get("MeasurementLStomach2").value,

      MeasurementSQ: this.form.get("MeasurementSQ").value,
      MeasurementSP: this.form.get("MeasurementSP").value,
      MeasurementMQ: this.form.get("MeasurementMQ").value,
      MeasurementMP: this.form.get("MeasurementMP").value,
      MeasurementLQ: this.form.get("MeasurementLQ").value,
      MeasurementLP: this.form.get("MeasurementLP").value,

      imgFront:"",
      imgBack:"",
      imgLeft:"",
      imgRight:"",
    };
    console.log(cloth);
    if (this.newProduct) {
      this.productService.addClothes(cloth);
    } else {
      this.productService.updateClothes(this.productId, cloth);
    }
  }

  retrieveProduct(productId: string, category: string) {
    this.getClothImages();

    this.productService
      .getCloth(productId, category)
      .subscribe(responseData => {
        console.log(responseData);
        this.title = responseData.result[0].category;
        this.form.patchValue({
          name: responseData.result[0].name,
          MeasurementSNeck1: responseData.result[0].small.neck[0],
          MeasurementSNeck2: responseData.result[0].small.neck[1],
          MeasurementSShoulderW1: responseData.result[0].small.shoulderweist[0],
          MeasurementSShoulderW2: responseData.result[0].small.shoulderweist[1],
          MeasurementSBicep1: responseData.result[0].small.biceps[0],
          MeasurementSBicep2: responseData.result[0].small.biceps[1],
          MeasurementSJacketL1: responseData.result[0].small.jacketlength[0],
          MeasurementSJacketL2: responseData.result[0].small.jacketlength[1],
          MeasurementSSleeveL1: responseData.result[0].small.sleevelength[0],
          MeasurementSSleeveL2: responseData.result[0].small.sleevelength[1],
          MeasurementSChest1: responseData.result[0].small.chest[0],
          MeasurementSChest2: responseData.result[0].small.chest[1],
          MeasurementSStomach1: responseData.result[0].small.stomach[0],
          MeasurementSStomach2: responseData.result[0].small.stomach[1],


          /*---*/
          MeasurementMNeck1: responseData.result[0].medium.neck[0],
          MeasurementMNeck2: responseData.result[0].medium.neck[1],
          MeasurementMShoulderW1: responseData.result[0].medium.shoulderweist[0],
          MeasurementMShoulderW2: responseData.result[0].medium.shoulderweist[1],
          MeasurementMBicep1: responseData.result[0].medium.biceps[0],
          MeasurementMBicep2: responseData.result[0].medium.biceps[1],
          MeasurementMJacketL1: responseData.result[0].medium.jacketlength[0],
          MeasurementMJacketL2: responseData.result[0].medium.jacketlength[1],
          MeasurementMSleeveL1: responseData.result[0].medium.sleevelength[0],
          MeasurementMSleeveL2: responseData.result[0].medium.sleevelength[1],
          MeasurementMChest1: responseData.result[0].medium.chest[0],
          MeasurementMChest2: responseData.result[0].medium.chest[1],
          MeasurementMStomach1: responseData.result[0].medium.stomach[0],
          MeasurementMStomach2: responseData.result[0].medium.stomach[1],
          /*---*/
          MeasurementLNeck1: responseData.result[0].large.neck[0],
          MeasurementLNeck2: responseData.result[0].large.neck[1],
          MeasurementLShoulderW1: responseData.result[0].large.shoulderweist[0],
          MeasurementLShoulderW2: responseData.result[0].large.shoulderweist[1],
          MeasurementLBicep1: responseData.result[0].large.biceps[0],
          MeasurementLBicep2: responseData.result[0].large.biceps[1],
          MeasurementLJacketL1: responseData.result[0].large.jacketlength[0],
          MeasurementLJacketL2: responseData.result[0].large.jacketlength[1],
          MeasurementLSleeveL1: responseData.result[0].large.sleevelength[0],
          MeasurementLSleeveL2: responseData.result[0].large.sleevelength[1],
          MeasurementLChest1: responseData.result[0].large.chest[0],
          MeasurementLChest2: responseData.result[0].large.chest[1],
          MeasurementLStomach1: responseData.result[0].large.stomach[0],
          MeasurementLStomach2: responseData.result[0].large.stomach[1],

          /*--------------------------------*/

          MeasurementSQ: responseData.result[0].small.quantity,
      MeasurementSP: responseData.result[0].small.price,
      MeasurementMQ: responseData.result[0].medium.quantity,
      MeasurementMP: responseData.result[0].medium.price,
      MeasurementLQ: responseData.result[0].large.quantity,
      MeasurementLP: responseData.result[0].large.price
        });

        /* this.imgFrontPath = responseData.result[0].imgFront;
        this.imgBackPath = responseData.result[0].imgBack;
        this.imgLeftPath = responseData.result[0].imgLeft;
        this.imgRightPath = responseData.result[0].imgRight;
        */
      });
  }

  getClothImages() {
    this.productService
      .getClothImages(this.productId)
      .subscribe(responseData => {
        if (responseData.message > 0) {
          console.log(responseData.result);
          this.imgFrontPath = responseData.result.imgFront;
          this.imgBackPath = responseData.result.imgBack;
          this.imgLeftPath = responseData.result.imgLeft;
          this.imgRightPath = responseData.result.imgRight;
        }
      });
  }
}
