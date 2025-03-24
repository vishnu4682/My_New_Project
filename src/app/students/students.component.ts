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
    //  filter(){
    //   this._studentService.getFilteredStudents(this.term).subscribe(
    //         (data:any)=>{
    //       console.log(data);
    //       this.studentdata=data;
    //     },(err:any)=>{
    //       alert("Internal server Error");
    //     }
    //   )
    // }
    

}
