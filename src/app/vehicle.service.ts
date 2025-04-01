import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  constructor(private _httpClient:HttpClient) { }
  // baseUrl:string='/assets/data.json';   // custom api
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"; 
  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  } 
  getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  } 
  getFilterVehicles(term:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }
  getSortedVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }
  getPaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }
  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data)
  }
}
  