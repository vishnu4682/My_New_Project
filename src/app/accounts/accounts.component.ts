import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  account: any=[];
  constructor(private _accountservice:AccountService){
    _accountservice. getaccounts(). subscribe (
      (data:any)=>{
        console.log(data);
        this.account=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
 