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
newMeasuremnts=false;
productList = [[]];
headerTitle = "";
measuremntId = "";
display:boolean = false;
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

  shirtMeasurementSave()
  {
    const data = {
      MeasurementNeck: this.formShirt.get("MeasurementNeck").value,
      MeasurementShoulderW: this.formShirt.get("MeasurementShoulderW").value,
      MeasurementBicep: this.formShirt.get("MeasurementBicep").value,
      MeasurementJacketL: this.formShirt.get("MeasurementJacketL").value,
      MeasurementSleeveL: this.formShirt.get("MeasurementSleeveL").value,
      MeasurementChest: this.formShirt.get("MeasurementChest").value
    }
    if(this.newMeasuremnts==true)
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
this.display = true;
            }
        });
    }
    else
    {
      this.searchProduct.updateShirtMeasurement(this.authService.getUserId(),data).subscribe(
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
              this.display = true;

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

    if(this.newMeasuremnts==true)
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
              this.display = true;


            }
        });
    }
    else
    {
      this.searchProduct.updateBottumMeasurement(this.authService.getUserId(),data).subscribe(
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
            this.display = true;

        });
    }

  }

  selectChangeHandler(event: any)
   {
     this.item = "";
     this.display = false;
    console.log(event.target.value);
    const item = event.target.value;
    if(item=="Shirts")
    {
      this.getShirtMeasurement(item);
    }
    else if(item=="Trousers" || item=="Shorts")
    {
      this.getBottumMeasurement(item);

    }

  }

  getShirtMeasurement(item:string)
  {
    this.searchProduct.getShirtMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnts = true;
      }
      else
      {
        this.formShirt.patchValue({
          MeasurementNeck:responseData.result[0].MeasurementNeck,
          MeasurementShoulderW:responseData.result[0].MeasurementShoulderW,
          MeasurementBicep:responseData.result[0].MeasurementBicep,
          MeasurementJacketL:responseData.result[0].MeasurementJacketL,
          MeasurementSleeveL:responseData.result[0].MeasurementSleeveL,
          MeasurementChest:responseData.result[0].MeasurementChest
        });
        this.newMeasuremnts = false;

      }
      this.item = item;
      this.display = true;

    });
  }

  getBottumMeasurement(item:string)
  {
    console.log(this.newMeasuremnts);
    this.searchProduct.getBottumMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnts = true;
        console.log(this.newMeasuremnts);
      }
      else
      {
        this.formBottum.patchValue({
          MeasurementPantsW: responseData.result[0].MeasurementPantsW,
          MeasurementHips: responseData.result[0].MeasurementHips,
          MeasurementLength: responseData.result[0].MeasurementLength,
          MeasurementCrotch: responseData.result[0].MeasurementCrotch,
          MeasurementThigh: responseData.result[0].MeasurementThigh,
          MeasurementKnee: responseData.result[0].MeasurementKnee
        });
        this.newMeasuremnts = false;

      }

      this.item = item;
      this.display = true;

    });
  }

  getAllShorts()
  {
    this.productList = [[]];

    this.productService.getAllTights('Shorts').subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
        return [];

      } else {
        console.log(responseData.result);

        this.headerTitle = "Shorts";
        return responseData.result;



      }

      //console.log(this.display);
    });
  }

  getAllTrousers() {
    this.productList = [[]];

    this.productService.getAllTights("Trousers").subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
        return [];

      } else {
        console.log(responseData.result);

        this.headerTitle = "Trousers";

        this.matchingBottums(responseData.result);



      }

    });
  }

  getAllShirts() {

    this.productService.getAllClothes().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = 'Stock is empty';
        return [];
      } else {
        this.headerTitle = 'Shirts';
        console.log(responseData.result);
        this.matchingShirts(responseData.result);


        /*let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];*/
        //tmp[0] = responseData.result[0];

        /*for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            productList.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          productList.push(tmp);
        }
        */

      }


    });
  }

  getProducts()
  {
    let tmpArry = [];
    this.productList = [[]];
    if(this.display!=true)
    {
      alert("Give your measuremnt details");
    }
    if(this.item=="Shirts")
    {
      tmpArry = this.getAllShirts();
    }
    if(this.item=="Trousers")
    {

      tmpArry = this.getAllTrousers();

    }
    if(this.item=="Shorts")
    {
      tmpArry = this.getAllShorts();
      console.log(tmpArry.length);
     // this.matchingBottums(tmpArry);

    }
  }

  matchingShirts(tmpArry)
  {
    this.productList.length = 0;
    let neck =  parseFloat(this.formShirt.get("MeasurementNeck").value);
    let shoulderw =  parseFloat(this.formShirt.get("MeasurementShoulderW").value);
    let bicep =  parseFloat(this.formShirt.get("MeasurementBicep").value);
    let jacketL =  parseFloat(this.formShirt.get("MeasurementJacketL").value);
    let sleeveL =  parseFloat(this.formShirt.get("MeasurementSleeveL").value);
    let chest =  parseFloat(this.formShirt.get("MeasurementChest").value);
    let i = 0 ,j = 0,t=0;
    let resultArr = [];
    for(i=0;i<tmpArry.length;i++)
    {
t=0;
        if(neck>=parseFloat(tmpArry[i].small.neck[0]) && neck<=parseFloat(tmpArry[i].small.neck[1]))

          {
            //console.log("A"+i);
            t = t+1;
          }
          if(shoulderw>=parseFloat(tmpArry[i].small.shoulderweist[0]) && shoulderw<=parseFloat(tmpArry[i].small.shoulderweist[1]))
          {
            //console.log("A"+i);
            t = t+1;
          }
            if(bicep>=parseFloat(tmpArry[i].small.biceps[0]) && bicep<=parseFloat(tmpArry[i].small.biceps[1]))
            {
              //console.log("A"+i);
              t = t+1;
            }
              if(jacketL>=parseFloat(tmpArry[i].small.jacketlength[0]) && jacketL<=parseFloat(tmpArry[i].small.jacketlength[1]))
              {
                //console.log("A"+i);
                t = t+1;
              }
                if(sleeveL>=parseFloat(tmpArry[i].small.sleevelength[0]) && sleeveL<=parseFloat(tmpArry[i].small.sleevelength[1]))
                {
                  //console.log("A"+i);
                  t = t+1;
                }
                  if(chest>=parseFloat(tmpArry[i].small.chest[0]) && chest<=parseFloat(tmpArry[i].small.chest[1]))
                  {
                    //console.log("A"+i);
                   // resultArr.push(tmpArry[i]);
                     // continue;
                    t = t+1;
                  }


                  if(t>3)
                  {
                    resultArr.push(tmpArry[i]);
                    continue;
                  }
                  t=0;

        if(neck>=parseFloat(tmpArry[i].medium.neck[0]) && neck<=parseFloat(tmpArry[i].medium.neck[1]))
        {
          //console.log("A"+i);
          t = t+1;
        }
          if(shoulderw>=parseFloat(tmpArry[i].medium.shoulderweist[0]) && shoulderw<=parseFloat(tmpArry[i].medium.shoulderweist[1]))
          {
            //console.log("A"+i);
            t = t+1;
          }
            if(bicep>=parseFloat(tmpArry[i].medium.biceps[0]) && bicep<=parseFloat(tmpArry[i].medium.biceps[1]))
            {
              //console.log("A"+i);
              t = t+1;
            }
              if(jacketL>=parseFloat(tmpArry[i].medium.jacketlength[0]) && jacketL<=parseFloat(tmpArry[i].medium.jacketlength[1]))
              {
                //console.log("A"+i);
                t = t+1;
              }
                if(sleeveL>=parseFloat(tmpArry[i].medium.sleevelength[0]) && sleeveL<=parseFloat(tmpArry[i].medium.sleevelength[1]))
                {
                  //console.log("A"+i);
                  t = t+1;
                }
                  if(chest>=parseFloat(tmpArry[i].medium.chest[0]) && chest<=parseFloat(tmpArry[i].medium.chest[1]))
                  {
                    //console.log("A"+i);
                    // resultArr.push(tmpArry[i]);
                      //continue;
                    t = t+1;
                  }

                  if(t>3)
                  {
                    resultArr.push(tmpArry[i]);
                    continue;
                  }
                  t=0;


        if(neck>=parseFloat(tmpArry[i].large.neck[0]) && neck<=parseFloat(tmpArry[i].large.neck[1]))
        {
          //console.log("A"+i);
          t = t+1;
        }
          if(shoulderw>=parseFloat(tmpArry[i].large.shoulderweist[0]) && shoulderw<=parseFloat(tmpArry[i].large.shoulderweist[1]))
          {
            //console.log("A"+i);
            t = t+1;
          }
            if(bicep>=parseFloat(tmpArry[i].large.biceps[0]) && bicep<=parseFloat(tmpArry[i].large.biceps[1]))
            {
              //console.log("A"+i);
              t = t+1;
            }
              if(jacketL>=parseFloat(tmpArry[i].large.jacketlength[0]) && jacketL<=parseFloat(tmpArry[i].large.jacketlength[1]))
              {
                //console.log("A"+i);
                t = t+1;
              }
                if(sleeveL>=parseFloat(tmpArry[i].large.sleevelength[0]) && sleeveL<=parseFloat(tmpArry[i].large.sleevelength[1]))
                {
                  //console.log("A"+i);
                  t = t+1;
                }
                  if(chest>=parseFloat(tmpArry[i].large.chest[0]) && chest<=parseFloat(tmpArry[i].large.chest[1]))
                  {

                      //resultArr.push(tmpArry[i]);
                      //continue;
                      t = t+1;
                  }

                  if(t>3)
                  {
                    resultArr.push(tmpArry[i]);
                    continue;

                  }
                  t=0;


    }
    if(resultArr.length>0)
    {
      this.arrangeItems(resultArr);
      this.headerTitle = "These items may match your measurements";

    }
    else
    {
      this.headerTitle = "No matching items";
    }
  }


  matchingBottums(tmpArry)
  {
    this.productList.length = 0;

    let pantsw =  parseFloat(this.formBottum.get("MeasurementPantsW").value);
    let hips =  parseFloat(this.formBottum.get("MeasurementHips").value);
    let length =  parseFloat(this.formBottum.get("MeasurementLength").value);
    let crotch =  parseFloat(this.formBottum.get("MeasurementCrotch").value);
    let thigh =  parseFloat(this.formBottum.get("MeasurementThigh").value);
    let knee =  parseFloat(this.formBottum.get("MeasurementKnee").value);
    let i = 0 ,j = 0,t=0;
    let resultArr = [];
    for(i=0;i<tmpArry.length;i++)
    {
      //console.log(tmpArry);
t=0;
        if(pantsw>=parseFloat(tmpArry[i].small.PantsW[0]) && pantsw<=parseFloat(tmpArry[i].small.PantsW[1]))
        {
         // console.log("A"+i);
          t = t+1;
        }
          if(hips>=parseFloat(tmpArry[i].small.Hips[0]) && hips<=parseFloat(tmpArry[i].small.Hips[1]))
          {
            //console.log("A"+i);
            t = t+1;
          }
            if(length>=parseFloat(tmpArry[i].small.Length[0]) && length<=parseFloat(tmpArry[i].small.Length[1]))
            {
              //console.log("A"+i);
              t = t+1;
            }
              if(crotch>=parseFloat(tmpArry[i].small.Crotch[0]) && crotch<=parseFloat(tmpArry[i].small.Crotch[1]))
              {
                 //console.log("A"+i);
          t = t+1;
              }
                if(thigh>=parseFloat(tmpArry[i].small.Thigh[0]) && thigh<=parseFloat(tmpArry[i].small.Thigh[1]))
                {
                   //console.log("A"+i);
          t = t+1;
                }
                  if(knee>=parseFloat(tmpArry[i].small.Knee[0]) && knee<=parseFloat(tmpArry[i].small.Knee[1]))
                  {
                    //console.log("A"+i);
                    // resultArr.push(tmpArry[i]);

          t = t+1;
                  }


if(t>3)
{
  resultArr.push(tmpArry[i]);
  continue;

}
t=0;

        if(pantsw>=parseFloat(tmpArry[i].medium.PantsW[0]) && pantsw<=parseFloat(tmpArry[i].medium.PantsW[1]))
        {
          t = t+1;
        }
          if(hips>=parseFloat(tmpArry[i].medium.Hips[0]) && hips<=parseFloat(tmpArry[i].medium.Hips[1]))
          {
            t = t+1;
          }

            if(length>=parseFloat(tmpArry[i].medium.Length[0]) && length<=parseFloat(tmpArry[i].medium.Length[1]))
            {
              t = t+1;
            }
              if(crotch>=parseFloat(tmpArry[i].medium.Crotch[0]) && crotch<=parseFloat(tmpArry[i].medium.Crotch[1]))
              {
                t = t+1;
              }
                if(thigh>=parseFloat(tmpArry[i].medium.Thigh[0]) && thigh<=parseFloat(tmpArry[i].medium.Thigh[1]))
                {
                  t = t+1;
                }
                  if(knee>=parseFloat(tmpArry[i].medium.Knee[0]) && knee<=parseFloat(tmpArry[i].medium.Knee[1]))
                  {
                    t = t+1;

                     // resultArr.push(tmpArry[i]);
                   ///   continue;
                  }


        if(t>3)
        {
          resultArr.push(tmpArry[i]);
          continue;

        }
        t=0;

        if(pantsw>=parseFloat(tmpArry[i].large.PantsW[0]) && pantsw<=parseFloat(tmpArry[i].large.PantsW[1]))
        {
          t = t+1;
        }
          if(hips>=parseFloat(tmpArry[i].large.Hips[0]) && hips<=parseFloat(tmpArry[i].large.Hips[1]))
          {
            t = t+1;
          }
            if(length>=parseFloat(tmpArry[i].large.Length[0]) && length<=parseFloat(tmpArry[i].large.Length[1]))
            {
              t = t+1;
            }
              if(crotch>=parseFloat(tmpArry[i].large.Crotch[0]) && crotch<=parseFloat(tmpArry[i].large.Crotch[1]))
              {
                t = t+1;
              }
                if(thigh>=parseFloat(tmpArry[i].large.Thigh[0]) && thigh<=parseFloat(tmpArry[i].large.Thigh[1]))
                {
                  t = t+1;
                }
                  if(knee>=parseFloat(tmpArry[i].large.Knee[0]) && knee<=parseFloat(tmpArry[i].large .Knee[1]))
                  {
                    t = t+1;

                     // resultArr.push(tmpArry[i]);
                     // continue;
                  }



if(t>3)
{
  resultArr.push(tmpArry[i]);
  continue;

}
t=0;
    }
    if(resultArr.length>0)
    {
      this.arrangeItems(resultArr);
      this.headerTitle = "These items may match your measurements";
    }
    else
    {
      this.headerTitle = "No matching items";
    }
  }


  arrangeItems(tmpArry)
  {
    let i = 0;
    let j = 0;

    let tmp = [];
    //tmp[0] = responseData.result[0];
    for (i = 1; i < tmpArry.length + 1; i++) {
      j = 1;

      if (i % 3 != 0) {
        tmp.push(tmpArry[i - 1]);
        console.log(tmp);
      } else {
        tmp.push(tmpArry[i - 1]);
        this.productList.push(tmp);
        tmp = [];
      }
    }
    if (tmp.length > 0) {
      this.productList.push(tmp);
    }
  }
}
