import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
      
  isVisible:boolean=true;
  
  states:string[]=['Andhra Pradesh','Karnataka','Kerala','Maharashtra','Tamilnadu','Telangana'];


  products:any=[
    {name:'pen',price:10,rating:3.5},
    {name:'book',price:50,rating:4.5},
    {name:'mobile',price:10000,rating:2.5},
    {name:'laptap',price:50000,rating:1.5},
    {name:'ipad',price:40000,rating:3.2},
    {name:'tv',price:20000,rating:3.0},
    {name:'shirt',price:600,rating:3.7},
    {name:'bike',price:100000,rating:4.5},
    {name:'car',price:1000000,rating:3.6},
    {name:'auto',price:300000,rating:2.9},
    {name:'bus',price:5000000,rating:4.0},

  ]

 newDate: any=new Date();

}


