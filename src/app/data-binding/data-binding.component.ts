import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //event binding

  click(){
    alert("Helloooooooo!");
  }

  // submit(){
  //   alert("hi");
  // }

  //Interpolation
  age:number=26;
  name:string="vishnu";



//Property binding
// isData:boolean=true;

// two way data Binding
mobile:string='+91'

submit(){
  alert(this.mobile);
}

num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=this.num1+this.num2;
  console.log(this.result);
}

}
