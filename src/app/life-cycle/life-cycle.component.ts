import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent  implements OnChanges,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
 interval:any;
 ngOnInit(): void {
   console.log("ngOnInit running");
   this.interval=setInterval(()=>{
    console.log("count");
   },5000)
 }
 ngOnDestroy(): void {
   console.log("ngOnDestroy runnung");
   clearInterval(this.interval);
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges runnung");
 }
 ngDoCheck(): void {
   console.log("ngDoCheck running");
 }
 ngAfterViewInit(): void {
   console.log("ngAfterViewInit running");
 }
 ngAfterViewChecked(): void {
   console.log("ngAfterViewChecked running");
 }
 ngAfterContentInit(): void {
   console.log("ngAfterContentInit running");
 }
 ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked running");
 }

}
