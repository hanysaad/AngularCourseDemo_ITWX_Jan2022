import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  //private isLogged=false;
  private isloggedSubject: BehaviorSubject<boolean>;
  constructor() { 
    this.isloggedSubject= new BehaviorSubject<boolean>(false);
  }

  login(usrName: string, password:string)
  {
    //Call Login API, that will return Access Token
    let fakeToken:string="17d0cb24-60cb-4e5b-8857-6601e5da7427";
    localStorage.setItem("Toekn", fakeToken);
    //this.isLogged=true;
    this.isloggedSubject.next(true);
  }

  logOut()
  {
    // Call Logout API
    localStorage.removeItem("Toekn");
    //this.isLogged=false;
    this.isloggedSubject.next(false);
  }

  // isUsrLogged():boolean
  // {
  //   return this.isLogged;
  // }

  isUsrLogged():Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }

  get isLogged()
  {
    return localStorage.getItem('Toekn')? true: false;
  }

}
