import { FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Cloth } from "../modules/Cloth";
import { mimeType } from "../cloth-edit/mime-type.validator";
import { Tights } from '../modules/Tights';

@Component({
  selector: "app-tights-form",
  templateUrl: "./tights-form.component.html",
  styleUrls: ["./tights-form.component.css"]
})
export class TightsFormComponent implements OnInit {
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
    MeasurementSPantsW1: new FormControl("", Validators.required),
    MeasurementSPantsW2: new FormControl("", Validators.required),
    MeasurementMPantsW1: new FormControl("", Validators.required),
    MeasurementMPantsW2: new FormControl("", Validators.required),
    MeasurementLPantsW1: new FormControl("", Validators.required),
    MeasurementLPantsW2: new FormControl("", Validators.required),
    MeasurementSHips1: new FormControl("", Validators.required),
    MeasurementSHips2: new FormControl("", Validators.required),
    MeasurementMHips1: new FormControl("", Validators.required),
    MeasurementMHips2: new FormControl("", Validators.required),
    MeasurementLHips1: new FormControl("", Validators.required),
    MeasurementLHips2: new FormControl("", Validators.required),
    MeasurementSLength1: new FormControl("", Validators.required),
    MeasurementSLength2: new FormControl("", Validators.required),
    MeasurementMLength1: new FormControl("", Validators.required),
    MeasurementMLength2: new FormControl("", Validators.required),
    MeasurementLLength1: new FormControl("", Validators.required),
    MeasurementLLength2: new FormControl("", Validators.required),
    MeasurementSCrotch1: new FormControl("", Validators.required),
    MeasurementSCrotch2: new FormControl("", Validators.required),
    MeasurementMCrotch1: new FormControl("", Validators.required),
    MeasurementMCrotch2: new FormControl("", Validators.required),
    MeasurementLCrotch1: new FormControl("", Validators.required),
    MeasurementLCrotch2: new FormControl("", Validators.required),

    MeasurementSThigh1: new FormControl("", Validators.required),
    MeasurementSThigh2: new FormControl("", Validators.required),
    MeasurementMThigh1: new FormControl("", Validators.required),
    MeasurementMThigh2: new FormControl("", Validators.required),
    MeasurementLThigh1: new FormControl("", Validators.required),
    MeasurementLThigh2: new FormControl("", Validators.required),
    MeasurementSKnee1: new FormControl("", Validators.required),
    MeasurementSKnee2: new FormControl("", Validators.required),
    MeasurementMKnee1: new FormControl("", Validators.required),
    MeasurementMKnee2: new FormControl("", Validators.required),
    MeasurementLKnee1: new FormControl('', Validators.required),
    MeasurementLKnee2: new FormControl("", Validators.required),
    MeasurementSQ: new FormControl("", Validators.required),
    MeasurementMQ: new FormControl("", Validators.required),
    MeasurementLQ: new FormControl("", Validators.required),
    MeasurementSP: new FormControl("", Validators.required),
    MeasurementMP: new FormControl("", Validators.required),
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
      // console.log(this.title);
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
      // console.log(reader.result);
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
      // console.log(reader.result);
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
        this.productService.saveTightImage(
          this.productId,
          "Front",
          this.formFrontImage.value.image,
          this.formFrontImage.value.image.name
        );
        break;
      case "Back":
        this.productService.saveTightImage(
          this.productId,
          "Back",
          this.formBackImage.value.image,
          this.formBackImage.value.image.name
        );
        break;
      case "Left":
        this.productService.saveTightImage(
          this.productId,
          "Left",
          this.formLeftImage.value.image,
          this.formLeftImage.value.image.name
        );
        break;
      case "Right":
        this.productService.saveTightImage(
          this.productId,
          "Right",
          this.formRightImage.value.image,
          this.formRightImage.value.image.name
        );
        break;
    }
    setTimeout(() => {
      this.getImages();
    }, 11000);
  }

  addTights() {
    const tights: Tights = {
      category: this.title,
      name: this.form.get('name').value,
      MeasurementSPantsW1: this.form.get("MeasurementSPantsW1").value,
      MeasurementSPantsW2: this.form.get("MeasurementSPantsW2").value,
      MeasurementMPantsW1: this.form.get("MeasurementMPantsW1").value,
      MeasurementMPantsW2: this.form.get("MeasurementMPantsW2").value,
      MeasurementLPantsW1: this.form.get("MeasurementLPantsW1").value,
      MeasurementLPantsW2: this.form.get("MeasurementLPantsW2").value,
      MeasurementSHips1: this.form.get("MeasurementSHips1").value,
      MeasurementSHips2: this.form.get("MeasurementSHips2").value,
      MeasurementMHips1: this.form.get("MeasurementMHips1").value,
      MeasurementMHips2: this.form.get("MeasurementMHips2").value,
      MeasurementLHips1: this.form.get("MeasurementLHips1").value,
      MeasurementLHips2: this.form.get("MeasurementLHips2").value,
      MeasurementSLength1: this.form.get("MeasurementSLength1").value,
      MeasurementSLength2: this.form.get("MeasurementSLength2").value,
      MeasurementMLength1: this.form.get("MeasurementMLength1").value,
      MeasurementMLength2: this.form.get("MeasurementMLength2").value,
      MeasurementLLength1: this.form.get("MeasurementLLength1").value,
      MeasurementLLength2: this.form.get("MeasurementLLength2").value,
      MeasurementSCrotch1: this.form.get("MeasurementSCrotch1").value,
      MeasurementSCrotch2: this.form.get("MeasurementSCrotch2").value,
      // tslint:disable-next-line:quotemark
      MeasurementMCrotch1: this.form.get("MeasurementMCrotch2").value,
      MeasurementMCrotch2: this.form.get("MeasurementMCrotch2").value,
      MeasurementLCrotch1: this.form.get("MeasurementLCrotch1").value,
      MeasurementLCrotch2: this.form.get("MeasurementLCrotch2").value,
      MeasurementSThigh1: this.form.get("MeasurementSThigh1").value,
      MeasurementSThigh2: this.form.get("MeasurementSThigh2").value,
      MeasurementMThigh1: this.form.get("MeasurementMThigh1").value,
      MeasurementMThigh2: this.form.get("MeasurementMThigh2").value,
      MeasurementLThigh1: this.form.get("MeasurementLThigh1").value,
      MeasurementLThigh2: this.form.get("MeasurementLThigh2").value,
      MeasurementSKnee1: this.form.get("MeasurementSKnee1").value,
      MeasurementSKnee2: this.form.get("MeasurementSKnee2").value,
      MeasurementMKnee1: this.form.get("MeasurementMKnee1").value,
      MeasurementMKnee2: this.form.get("MeasurementMKnee2").value,
      MeasurementLKnee1: this.form.get("MeasurementLKnee1").value,
      MeasurementLKnee2: this.form.get("MeasurementLKnee1").value,
      MeasurementSQ: this.form.get("MeasurementSQ").value,
      MeasurementMQ: this.form.get("MeasurementMQ").value,
      MeasurementLQ: this.form.get("MeasurementLQ").value,
      MeasurementSP: this.form.get("MeasurementSP").value,
      MeasurementMP: this.form.get("MeasurementMP").value,
      MeasurementLP: this.form.get("MeasurementLP").value,
      imgFront:"",
      imgBack:"",
      imgLeft:"",
      imgRight:"",

    };
    if (this.newProduct) {
      this.productService.addTights(tights);
    } else {
      this.productService.updateTights(this.productId, tights);
    }
  }

  retrieveProduct(productId: string, category: string) {
    this.getImages();

    this.productService
      .getTight(productId, category)
      .subscribe(responseData => {
        console.log(responseData);
        this.title = responseData.result[0].category;
        /*this.form.patchValue({
          name: responseData.result[0].name,
          MeasurementSC1: responseData.result[0].small.chest[0],
          MeasurementSC2: responseData.result[0].small.chest[1],
          MeasurementSH1: responseData.result[0].small.hips[0],
          MeasurementSH2: responseData.result[0].small.hips[1],
          MeasurementSW1: responseData.result[0].small.weist[0],
          MeasurementSW2: responseData.result[0].small.weist[1],
          MeasurementSQ: responseData.result[0].small.quantity,
          MeasurementSP: responseData.result[0].small.price,

          MeasurementMC1: responseData.result[0].medium.chest[0],
          MeasurementMC2: responseData.result[0].medium.chest[1],
          MeasurementMH1: responseData.result[0].medium.hips[0],
          MeasurementMH2: responseData.result[0].medium.hips[1],
          MeasurementMW1: responseData.result[0].medium.weist[0],
          MeasurementMW2: responseData.result[0].medium.weist[1],
          MeasurementMQ: responseData.result[0].medium.quantity,
          MeasurementMP: responseData.result[0].medium.price,
          MeasurementLC1: responseData.result[0].large.chest[0],
          MeasurementLC2: responseData.result[0].large.chest[1],
          MeasurementLH1: responseData.result[0].large.hips[0],
          MeasurementLH2: responseData.result[0].large.hips[1],
          MeasurementLW1: responseData.result[0].large.weist[0],
          MeasurementLW2: responseData.result[0].large.weist[1],
          MeasurementLQ: responseData.result[0].large.quantity,
          MeasurementLP: responseData.result[0].large.price
        });
*/
        /* this.imgFrontPath = responseData.result[0].imgFront;
        this.imgBackPath = responseData.result[0].imgBack;
        this.imgLeftPath = responseData.result[0].imgLeft;
        this.imgRightPath = responseData.result[0].imgRight;
        */


       this.form.patchValue({
        name: responseData.result[0].name,
        MeasurementSPantsW1: responseData.result[0].small.PantsW[0],
        MeasurementSPantsW2: responseData.result[0].small.PantsW[1],
        MeasurementSHips1: responseData.result[0].small.Hips[0],
        MeasurementSHips2: responseData.result[0].small.Hips[1],
        MeasurementSLength1: responseData.result[0].small.Length[0],
        MeasurementSLength2: responseData.result[0].small.Length[1],
        MeasurementSCrotch1: responseData.result[0].small.Crotch[0],
        MeasurementSCrotch2: responseData.result[0].small.Crotch[1],
        MeasurementSThigh1: responseData.result[0].small.Thigh[0],
        MeasurementSThigh2: responseData.result[0].small.Thigh[1],
        MeasurementSKnee1: responseData.result[0].small.Knee[0],
        MeasurementSKnee2: responseData.result[0].small.Knee[1],
        MeasurementSQ: responseData.result[0].small.quantity,
        MeasurementSP: responseData.result[0].small.price,

        MeasurementMPantsW1: responseData.result[0].medium.PantsW[0],
        MeasurementMPantsW2: responseData.result[0].medium.PantsW[1],
        MeasurementMHips1: responseData.result[0].medium.Hips[0],
        MeasurementMHips2: responseData.result[0].medium.Hips[1],
        MeasurementMLength1: responseData.result[0].medium.Length[0],
        MeasurementMLength2: responseData.result[0].medium.Length[1],
        MeasurementMCrotch1: responseData.result[0].medium.Crotch[0],
        MeasurementMCrotch2: responseData.result[0].medium.Crotch[1],
        MeasurementMThigh1: responseData.result[0].medium.Thigh[0],
        MeasurementMThigh2: responseData.result[0].medium.Thigh[1],
        MeasurementMKnee1: responseData.result[0].medium.Knee[0],
        MeasurementMKnee2: responseData.result[0].medium.Knee[1],
        MeasurementMQ: responseData.result[0].medium.quantity,
        MeasurementMP: responseData.result[0].medium.price,


        MeasurementLPantsW1: responseData.result[0].large.PantsW[0],
        MeasurementLPantsW2: responseData.result[0].large.PantsW[1],
        MeasurementLHips1: responseData.result[0].large.Hips[0],
        MeasurementLHips2: responseData.result[0].large.Hips[1],
        MeasurementLLength1: responseData.result[0].large.Length[0],
        MeasurementLLength2: responseData.result[0].large.Length[1],
        MeasurementLCrotch1: responseData.result[0].large.Crotch[0],
        MeasurementLCrotch2: responseData.result[0].large.Crotch[1],
        MeasurementLThigh1: responseData.result[0].large.Thigh[0],
        MeasurementLThigh2: responseData.result[0].large.Thigh[1],
        MeasurementLKnee1: responseData.result[0].large.Knee[0],
        MeasurementLKnee2: responseData.result[0].large.Knee[1],
        MeasurementLQ: responseData.result[0].large.quantity,
        MeasurementLP: responseData.result[0].large.price,
      });
      });
  }

  getImages() {
    this.productService
      .getTightImages(this.productId)
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
