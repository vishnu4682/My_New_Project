import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studentdata: any=[];
  constructor(private _studentservice:StudentService) {
    _studentservice.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdata=data;
      },(err:any)=>{
        alert("Internal server Error")
      }
    )
  
  }
  loadStudent(){
    this._studentservice.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdata=data;
      },(err:any)=>{
        alert("Internal error")
      }
    )

  }
  delete(id:any){
    this._studentservice.deleteStudent(id).subscribe(
       (data:any)=>{
        this.loadStudent();
       },(err:any)=>{
        alert("internal error");
       }
    )
  }
}
