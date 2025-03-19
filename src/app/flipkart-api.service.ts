import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartApiService {

  constructor(private _httpclient:HttpClient) { }
   getFlipkart():Observable<any>{
    return this._httpclient.get('https://fakestoreapi.com/products')
   }
}
