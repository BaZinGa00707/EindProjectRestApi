import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class UserServiceService {

  private isUserLoggedIn;
  private username;

  constructor(){
    this.isUserLoggedIn = false;
  }
 
setUserLoggedIn(){
  this.isUserLoggedIn=true;
}

getUserLoggedIn(){
  return this.isUserLoggedIn;
}

setUserLogOut(){
  this.isUserLoggedIn=false;
}

}