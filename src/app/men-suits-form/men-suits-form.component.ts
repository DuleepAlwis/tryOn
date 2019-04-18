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

  /*UploadBackImage() {
    this.productService.saveClothImage(
      this.productId,
      "Back",
      this.formBackImage.get("image").value
    );
  }

  UploadRightImage() {
    this.productService.saveClothImage(
      this.productId,
      "Right",
      this.formRightImage.get("image").value
    );
  }


  UploadLeftImage() {
    this.productService.saveClothImage(
      this.productId,
      "Left",
      this.formLeftImage.get("image").value
    );
    }*/
  addCloth() {
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
          MeasurementSC1: responseData.result[0].small.chest[0],
          MeasurementSC2: responseData.result[0].small.chest[1],
          MeasurementSH1: responseData.result[0].small.hips[0],
          MeasurementSH2: responseData.result[0].small.hips[1],
          MeasurementSW1: responseData.result[0].small.weist[0],
          MeasurementSW2: responseData.result[0].small.weist[1],
          MeasurementSQ: responseData.result[0].small.quantity,
          MeasurementSP: responseData.result[0].small.price,
          /*---*/
          MeasurementMC1: responseData.result[0].medium.chest[0],
          MeasurementMC2: responseData.result[0].medium.chest[1],
          MeasurementMH1: responseData.result[0].medium.hips[0],
          MeasurementMH2: responseData.result[0].medium.hips[1],
          MeasurementMW1: responseData.result[0].medium.weist[0],
          MeasurementMW2: responseData.result[0].medium.weist[1],
          MeasurementMQ: responseData.result[0].medium.quantity,
          MeasurementMP: responseData.result[0].medium.price,
          /*---*/
          MeasurementLC1: responseData.result[0].large.chest[0],
          MeasurementLC2: responseData.result[0].large.chest[1],
          MeasurementLH1: responseData.result[0].large.hips[0],
          MeasurementLH2: responseData.result[0].large.hips[1],
          MeasurementLW1: responseData.result[0].large.weist[0],
          MeasurementLW2: responseData.result[0].large.weist[1],
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
