import { Component, OnInit, NgModule } from '@angular/core'; 
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles:[
    `body{
      background-color:blue;
    }`
  ]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.username);
    console.log(this.password)

  }

}
