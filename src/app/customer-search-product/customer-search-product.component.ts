import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SearchProductService } from '../services/search-product.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-customer-search-product',
  templateUrl: './customer-search-product.component.html',
  styleUrls: ['./customer-search-product.component.css']
})
export class CustomerSearchProductComponent implements OnInit {

  items = [
    "Shirts",
    "Trousers",
    "Shorts",
    "Sarees",
    "HandBags",
    "Caps",
    "Ties",
    "Belts",
    "Gloves"
  ];
item: string = "";
newMeasuremnt = false;
productList = [[]];
headerTitle = "";
measuremntId = "";

formShirt = new FormGroup({
  MeasurementNeck : new FormControl('',Validators.required),
  MeasurementShoulderW : new FormControl('',Validators.required),
  MeasurementBicep : new FormControl('',Validators.required),
  MeasurementJacketL : new FormControl('',Validators.required),
  MeasurementSleeveL : new FormControl('',Validators.required),
  MeasurementChest : new FormControl('',Validators.required)

});

formBottum = new FormGroup({
  MeasurementPantsW : new FormControl('',Validators.required),
  MeasurementHips : new FormControl('',Validators.required),
  MeasurementLength : new FormControl('',Validators.required),
  MeasurementCrotch : new FormControl('',Validators.required),
  MeasurementThigh : new FormControl('',Validators.required),
  MeasurementKnee : new FormControl('',Validators.required)

});

  constructor(private authService:AuthService,private searchProduct: SearchProductService,private productService:ProductService) { }

  ngOnInit() {
  }

  shirtMeausremntSave()
  {
    const data = {
      MeasurementNeck: this.formShirt.get("MeasurementNeck").value,
      MeasurementShoulderW: this.formShirt.get("MeasurementShoulderW").value,
      MeasurementBicep: this.formShirt.get("MeasurementBicep").value,
      MeasurementJacketL: this.formShirt.get("MeasurementJacketL").value,
      MeasurementSleeveL: this.formShirt.get("MeasurementSleeveL").value,
      MeasurementChest: this.formShirt.get("MeasurementChest").value
    }
    if(this.newMeasuremnt==true)
    {
      this.searchProduct.saveShirtMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId = responseData.id;
              this.getAllShirts();
            }
        });
    }
    else
    {
      this.searchProduct.updateShirtMeasurement(this.measuremntId,data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId = responseData.id;
              this.getAllShirts();

            }
        });
    }

  }

  bottumMeasurementSave()
  {
    const data = {
      MeasurementPantsW: this.formBottum.get("MeasurementPantsW").value,
      MeasurementHips: this.formBottum.get("MeasurementHips").value,
      MeasurementLength: this.formBottum.get("MeasurementLength").value,
      MeasurementCrotch: this.formBottum.get("MeasurementCrotch").value,
      MeasurementThigh: this.formBottum.get("MeasurementThigh").value,
      MeasurementKnee: this.formBottum.get("MeasurementKnee").value
    }

    if(this.newMeasuremnt==true)
    {
      this.searchProduct.saveBottumMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId = responseData.id;
              if(this.item=="Trousers")
              {
                this.getAllTrousers();
              }
              if(this.item=="Shorts")
              {
                this.getAllShorts();
              }

            }
        });
    }
    else
    {
      this.searchProduct.updateBottumMeasurement(this.measuremntId,data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId =  responseData.id;
            }
            if(this.item=="Trousers")
            {
              this.getAllTrousers();
            }
            if(this.item=="Shorts")
            {
              this.getAllShorts();
            }
        });
    }

  }

  selectChangeHandler(event: any)
   {
    console.log(event.target.value);
    this.item = event.target.value;
    if(this.item=="Shirts")
    {
      this.getShirtMeasurement();
    }
    else if(this.item=="Trousers" || this.item=="Shorts")
    {
      this.getBottumMeasurement();

    }
    else
    {

    }
  }

  getShirtMeasurement()
  {
    this.searchProduct.getShirtMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnt = true;
      }
      else
      {
        this.formShirt.patchValue({
          MeasurementNeck:responseData.result.MeasurementNeck,
          MeasurementShoulderW:responseData.result.MeasurementShoulderW,
          MeasurementBicep:responseData.result.MeasurementBicep,
          MeasurementJacketL:responseData.result.MeasurementJacketL,
          MeasurementSleeveL:responseData.result.MeasurementSleeveL,
          MeasurementChest:responseData.result.MeasurementChest
        });
        this.newMeasuremnt = false;

      }

    });
  }

  getBottumMeasurement()
  {
    console.log(this.newMeasuremnt);
    this.searchProduct.getBottumMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnt = true;

      }
      else
      {
        this.formBottum.patchValue({
          MeasurementPantsW: responseData.result.MeasurementPantsW,
          MeasurementHips: responseData.result.MeasurementHips,
          MeasurementLength: responseData.result.MeasurementLength,
          MeasurementCrotch: responseData.result.MeasurementCrotch,
          MeasurementThigh: responseData.result.MeasurementThigh,
          MeasurementKnee: responseData.result.MeasurementKnee
        });
        this.newMeasuremnt = false;

      }

    });
  }

  getAllShorts()
  {
    this.productList = [[]];

    this.productService.getAllTights('Shorts').subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Shorts";

        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.productList.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.productList.push(tmp);
        }

      }

      //console.log(this.display);
    });
  }

  getAllTrousers() {
    this.productList = [[]];

    this.productService.getAllTights("Trousers").subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Trousers";


        let i = 0;
        let j = 0;
        console.log(responseData.result);


        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.productList.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.productList.push(tmp);
        }

      }

    });
  }

  getAllShirts() {
    this.productList = [[]];

    this.productService.getAllClothes().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = 'Stock is empty';
      } else {
        this.headerTitle = 'Shirts';


        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        //tmp[0] = responseData.result[0];

        for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.productList.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.productList.push(tmp);
        }

      }


    });
  }
}
