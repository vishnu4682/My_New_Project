import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from "@angular/common/http";
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    HomeComponent,
    DataBindingComponent,
    BmiComponent,
    SimpleInterestComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    FlipkartApiComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentsComponent,
    CreateUserComponent,
    StudentDataComponent,
    VehicleDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
