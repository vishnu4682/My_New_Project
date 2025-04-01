import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  user:User={
    name:'Vishnu',
    email:'vishnu505209@gmail.com',
    age:27
  };

}
