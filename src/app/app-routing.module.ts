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
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path: 'Welcome', component:WelcomeComponent},
    {path: 'Calculator', component:CalculatorComponent},
    {path: 'Rectangle',component:RectangleComponent},
    {path: 'Circle', component:CircleComponent},
    {path: 'Home', component:HomeComponent},
    {path: 'Data-Binding',component:DataBindingComponent},
    {path: 'BMI',component:BmiComponent},
    {path: "simple-interest",component:SimpleInterestComponent},
    {path: "Directives",component:DirectivesComponent},
    {path: "employee",component:EmployeeComponent},
    {path: "flipkart",component:FlipkartComponent},
    {path: "vehicle",component:VehicleComponent},
    {path: "accounts",component:AccountsComponent},
    {path: "flipkart-api",component:FlipkartApiComponent},
    {path: "create-vehicle",component:CreateVehicleComponent},  
    {path: "create-account",component:CreateAccountComponent}, 
    {path: "student",component:StudentsComponent}, 
    {path: "create-user",component:CreateUserComponent},
    {path: "student-data",component:StudentDataComponent},
    {path: "vehicle-details/:id",component:VehicleDetailsComponent},
    {path: "edit-vehicle/:id",component:CreateVehicleComponent}
    
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
