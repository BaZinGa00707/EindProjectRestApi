import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-activity-users',
  templateUrl: './activity-users.component.html',
  styleUrls: ['./activity-users.component.css']
})
export class ActivityUsersComponent implements OnInit {

  email:string;
  pass:string;

  okEmail: boolean = false;
  okPass : boolean = false;
  index:number=0;

  _check:string = "";
  _check2:string= "";

  UsersEmails:string[]= [
    "test1",
    "test2",
    "test3"
  ];
  UsersPass:string[]= [
    "pass1",
    "pass2",
    "pass3"
  ];
  
   constructor(private user:UserServiceService , private service:PokemonServiceService) {
   
    }
  
   ngOnInit() {
   }


   SignUp(event){
    this.UsersEmails.push(this.email);
    this.UsersPass.push(this.pass);
    this._check= "Creaded User! pls first click LOGIN to log in !!!"
   }


   LogIn(event){ 
     this.checkLog(this.email,this.pass);
     if(this.okEmail == true && this.okPass == true){
      this.user.setUserLoggedIn();
      this.service.CheckLoginTrue();
      this._check = "Correct! your are now logged in";
      this._check2 = "Now you can see your own pokemon!  "
     }
     else {
       this._check = "Failed to login!"
       this._check2 = "";
     }
      //console.log(this.email , this.pass);
     /* if (this.email == "test" && this.pass == "test"){
         this.user.setUserLoggedIn();
         this.service.CheckLoginTrue
      }*/
    }

    LogOut(event){
       this.user.setUserLogOut();
       this.service.CheckLoginFalse();
       this._check = "logged out!"
     //this.user.
    }



    checkLog(e:string , p:string){
      this.okEmail = false;
      this.okPass = false;

      for (var i = 0; i < this.UsersEmails.length; i++) { 
        if(this.UsersEmails[i] == e){
           this.okEmail = true;
        }
      }
      for (var i = 0; i < this.UsersPass.length; i++) { 
        if(this.UsersPass[i] == p){
           this.okPass = true;
        }
      }
    }
  
}