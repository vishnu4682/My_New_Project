import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { DammyComponent } from './dammy/dammy.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';


const routes: Routes = [
  {path: "login",component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard], children:[    
    {path: "parent",component:ParentComponent},
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
    {path: "edit-vehicle/:id",component:CreateVehicleComponent},
    {path: "dammy",canActivate:[AuthenticationGuard],component:DammyComponent},
    {path: 'Welcome', component:WelcomeComponent},
    {path: "sibling1",component:Sibling1Component},
    {path: "life-cycle",component:LifeCycleComponent},
    {
      path:'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }   
    
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
