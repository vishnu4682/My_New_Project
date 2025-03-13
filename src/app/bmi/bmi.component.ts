import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight:number=0;
height:number=0;
result:number=0;

bmi(){
  console.log(this.weight,this.height*2);
  this.result=this.weight/this.height*2;
  console.log(this.result);
}
}
