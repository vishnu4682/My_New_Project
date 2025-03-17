import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products:any=[
    {productname: 'Pen', price: 10,rating: 3,freedelivery: 'False'},
    {productname: 'Shoes',price: 1000,rating: 4,freedelivery: 'True'},
    {productname: 'Shampoo',price: 150,rating: 4.5,freedelivery: 'False'},
    {productname: 'Guitar',price: 5000,rating: 5,freedelivery: 'True'},
    {productname: 'Watch',price: 800,rating: 3,freedelivery: 'True'},
    {productname: 'Cap',price: 300,rating: 4,freedelivery: 'False'},       
  ]

  productname:string="";
  price:number=0;
  rating:number=0;
  choice?:string 

  create(){
    let product={
      productname:this.productname,
      price:this.price,
      rating:this.rating,
      freedelivery:this.choice==='true'? 'True':'False' 
    };
    this.products.unshift(product);
  }
  delete(i:any){
    this.products.splice(i,1);
  }
  term:string='';
  search(){
    this.products=this.products.filter((product:any)=>product.productname.includes(this.term));
  }

  sort(){
    this.products.sort((a:any,b:any)=>a.price-b.price);    
  }
  sort1(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  sort2(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);    
  }
  sort3(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  percentage:number=0
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    })
  }

  deliverycharge(){
    this.products=this.products.map((product:any)=>
    {product.price=product.price+100;
      return product;
    })
  }
}
