import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  items1 = [];
  items2 = [];
  items3 = [];
  items = [[]];
  display = false;
  headerTitle = "";
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  getAllShorts() {
    this.productService.getAllTights("Shorts").subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Shorts";

        this.items = [[]];
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
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllTrousers() {
    this.productService.getAllTights("Trousers").subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Trousers";

        this.items = [[]];

        let i = 0;
        let j = 0;
        console.log(responseData.result);
        /*for(i=0;i<responseData.result.length;i++)
        {
                 setTimeout(() => {
                   this.items[i]=responseData.result[i];
                 }, 3000);

        }*/
        /* while(i<responseData.result.length)
        {
            if(responseData.result[i])
          {
                        console.log(responseData.result[i]);

            this.items1[i] = responseData.result[i];
            console.log("A"+" "+i);
          }


          if(responseData.result[++i])
          {
                        console.log(responseData.result[i]);

            this.items2[--i] = responseData.result[i];
                        console.log("B"+" "+i);

            i = i+1;
          }


          if(responseData.result[++i])
          {            console.log(responseData.result[i]);


            this.items3[((--i)-1)] = responseData.result[i];
                        console.log("C"+" "+i);
i = i+2
          }

        }*/

        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllShirts() {
    this.productService.getAllClothes().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Shirts";

        this.items = [[]];

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
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllCaps() {
    this.productService.getAllCaps().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Caps";

        this.items = [[]];

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
            this.items.push(tmp);
            tmp = [];
          }
        }
        console.log(this.items);
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllHandBags() {
    this.productService.getAllHandBags().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "HandBags";

        this.items = [[]];

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
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllBelts() {
    this.productService.getAllBelts().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Belts";

        this.items = [[]];

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
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllGloves() {
    this.productService.getAllGloves().subscribe(responseData => {
      if (responseData.message == 0) {
        this.headerTitle = "Stock is empty";
      } else {
        this.headerTitle = "Gloves";

        this.items = [[]];

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
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }
}
