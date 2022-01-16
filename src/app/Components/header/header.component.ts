import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged=false;
  constructor(private usrAuthSrv: UserAuthService) { }

  ngOnInit(): void {
    //this.isLogged=this.usrAuthSrv.isUsrLogged();
    this.usrAuthSrv.isUsrLogged().subscribe((loginStatus)=>
    {
      this.isLogged=loginStatus;
    })
  }

}
