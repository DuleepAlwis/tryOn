import { Injectable } from "@angular/core";
import { Cloth } from "../modules/Cloth";
import { Accessories } from "../modules/Accessories";

import {
  HttpClient,
  HttpParams,
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  addClothes(cloth: Cloth) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/clothes/AddClothes",
        cloth
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  addTights(cloth: Cloth) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/clothes/AddTights",
        cloth
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  addGloves(gloves: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddGloves",
        gloves
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  addBelts(belts: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddBelts",
        belts
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  addCaps(gloves: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddCaps",
        gloves
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  addHandBags(handBags: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddHandBags",
        handBags
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong");
        } else {
          alert("Success!!!");
        }
      });
  }

  getAllClothes() {
    return this.http.post<{ message: Number; result: Array<Object> }>(
      this.url + "/api/clothes/getAllClothes",
      {}
    );
  }

  getAllBelts() {
    return this.http.post<{ message: Number; result: Array<Object> }>(
      this.url + "/api/clothes/getAllBelts",
      {}
    );
  }
}
