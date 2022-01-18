import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private usrAuth: UserAuthService) { }

  ngOnInit(): void {
    this.isLogged=this.usrAuth.isLogged;
  }

  login()
  {
    this.usrAuth.login("Username","password");
    this.isLogged=this.usrAuth.isLogged;
  }

  logout()
  {
    this.usrAuth.logOut();
    this.isLogged=this.usrAuth.isLogged;
  }

}
