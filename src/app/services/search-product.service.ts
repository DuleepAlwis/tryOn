import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BottumMeasuremnt } from '../modules/BottumMeasuremnt';
import { ShirtMeasuremnt } from '../modules/ShirtMeasuremnt';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  saveShirtMeasurement(customerId: string,data:ShirtMeasuremnt)
  {
    return this.http.post<{message: Number,id:string}>(this.url+"/api/measuremnt/shirtSave",{id:customerId,data:data});
  }

  saveBottumMeasurement(customerId: string,data:BottumMeasuremnt)
  {
    return this.http.post<{message: Number,id:string}>(this.url+'/api/measuremnt/bottumSave',{id:customerId,data:data});
  }

  updateShirtMeasurement(measuremntId: string,data:ShirtMeasuremnt)
  {
    return this.http.post<{message: Number,id:string}>(this.url+"/api/measuremnt/shirtUpdate",{id:measuremntId,data:data});
  }

  updateBottumMeasurement(measuremntId: string,data:BottumMeasuremnt)
  {
    return this.http.post<{message: Number,id:string}>(this.url+'/api/measuremnt/bottumUpdate',{id:measuremntId,data:data});
  }



  getShirtMeasurement(customerId: string)
  {
    return this.http.post<{message: Number,result:ShirtMeasuremnt}>(this.url+'/api/measurement/getShirt',{id:customerId});
  }

  getBottumMeasurement(customerId: string)
  {
    return this.http.post<{message: Number,result:BottumMeasuremnt}>(this.url+'/api/measurement/getBottum',{id:customerId});
  }
}
