import { Component } from '@angular/core';
import { FlipkartApiService } from '../flipkart-api.service';

@Component({
  selector: 'app-flipkart-api',
  templateUrl: './flipkart-api.component.html',
  styleUrls: ['./flipkart-api.component.css']
})
export class FlipkartApiComponent {
  flipkartdata: any=[];
   constructor(private _flipkartapiservice:FlipkartApiService){
    _flipkartapiservice.getFlipkart().subscribe(
      (data:any)=>{
        console.log(data);
        this.flipkartdata=data;
      },(err:any)=>{
        alert("internal server error")
      }
    )
   }
}
