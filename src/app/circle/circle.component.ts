import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius:number=0;
  result:number=0;

  area(){
    console.log (3.14*(this.radius**2));
  this.result= 3.14*(this.radius**2);
  console.log(this.result);
  }
  perimeter(){
    console.log (2*3.14*(this.radius));
    this.result= 2*3.14*(this.radius);
    console.log(this.result);
  }

}
