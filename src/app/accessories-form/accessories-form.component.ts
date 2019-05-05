import { Component, OnInit, Input } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Accessories } from "./../modules/Accessories";
import { ProductService } from "./../services/product.service";
import { mimeType } from "../cloth-edit/mime-type.validator";

@Component({
  selector: "app-accessories-form",
  templateUrl: "./accessories-form.component.html",
  styleUrls: ["./accessories-form.component.css"]
})
export class AccessoriesFormComponent implements OnInit {
  form = new FormGroup({
    category: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    length: new FormControl("", Validators.required),
    width: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required)
  });

  title: string;
  items = ["Gloves", "Belt", "Caps", "HandBags"];

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

  newProduct: boolean = true;
  imgFrontPath: string;
  imgBackPath: string;
  imgLeftPath: string;
  imgRightPath: string;
  @Input("productId") productId: string;
  @Input("type") type: string;
  @Input("category") category: string;

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
        this.productService.saveAccessoriesImage(
          this.productId,
          this.category,
          "Front",
          this.formFrontImage.value.image,
          this.formFrontImage.value.image.name
        );
        break;
      case "Back":
        this.productService.saveAccessoriesImage(
          this.productId,
          this.category,

          "Back",
          this.formBackImage.value.image,
          this.formBackImage.value.image.name
        );
        break;
      case "Left":
        this.productService.saveAccessoriesImage(
          this.productId,
          this.category,

          "Left",
          this.formLeftImage.value.image,
          this.formLeftImage.value.image.name
        );
        break;
      case "Right":
        this.productService.saveAccessoriesImage(
          this.productId,
          this.category,

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

  saveProduct() {
    const accessories: Accessories = {
      category: this.form.get("category").value,
      name: this.form.get("name").value,
      length: this.form.get("length").value,
      width: this.form.get("width").value,
      quantity: this.form.get("quantity").value,
      price: this.form.get("price").value,
      imgFront:"",
      imgBack:"",
      imgLeft:"",
      imgRight:""
    };
    console.log(accessories);
    if (this.newProduct) {
      switch (this.form.get("category").value) {
        case "Gloves":
          this.productService.addGloves(accessories);
          break;
        case "Belt":
          this.productService.addBelts(accessories);
          break;
        case "Caps":
          this.productService.addCaps(accessories);
          break;
        case "HandBags":
          this.productService.addHandBags(accessories);
          break;
      }
    }

    if (!this.newProduct) {
      this.productService.updateAccessories(
        this.productId,
        accessories,
        this.category
      );
    }
  }

  retrieveProduct(productId: string, category: string) {
    this.getImages();

    this.productService
      .getAccessories(productId, category)
      .subscribe(responseData => {
        console.log(responseData);
        this.title = responseData.result[0].category;
        let length = 0;
        let width = 0;
        console.log(responseData);
        switch (category) {
          case "Caps":
            width = responseData.result[0].width;
            break;
          case "Belts":
            length = responseData.result[0].length;
            break;
          case "Gloves":
            length = responseData.result[0].length;
            width = responseData.result[0].width;
        }
        this.form.patchValue({
          category: category,
          name: responseData.result[0].name,
          length: length,
          width: width,
          quantity: responseData.result[0].quantity,
          price: responseData.result[0].price
        });

        /* this.imgFrontPath = responseData.result[0].imgFront;
        this.imgBackPath = responseData.result[0].imgBack;
        this.imgLeftPath = responseData.result[0].imgLeft;
        this.imgRightPath = responseData.result[0].imgRight;
        */
      });
  }

  getImages() {
    this.productService
      .getAccessoriesImages(this.productId, this.category)
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
