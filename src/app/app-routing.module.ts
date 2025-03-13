import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BmiComponent } from './bmi/bmi.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path: 'Welcome', component:WelcomeComponent},
    {path: 'Calculator', component:CalculatorComponent},
    {path: 'Rectangle',component:RectangleComponent},
    {path: 'Circle', component:CircleComponent},
    {path: 'Home', component:HomeComponent},
    {path: 'Data-Binding',component:DataBindingComponent},
    {path: 'BMI',component:BmiComponent},
    {path: "simple-interest",component:SimpleInterestComponent}
    
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
