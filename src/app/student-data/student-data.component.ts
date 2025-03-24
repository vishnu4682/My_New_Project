import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {
  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    class:new FormControl(),
    fathername: new FormControl(),
    email: new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline: new FormControl(),
      city:new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    type:new FormControl(), 
    cards: new FormArray([]),

  })
  get cardsFormArray(){
      return this.userForm.get('cards') as FormArray;
    }
    addcard(){
      this.cardsFormArray.push(
        new FormGroup({
          class:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()
        })
      )
    }
    deletecard(i:number){
      this.cardsFormArray.removeAt(i);
    }
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

  submit(){
    console.log(this.userForm);
    // alert('reading');
  }

}
