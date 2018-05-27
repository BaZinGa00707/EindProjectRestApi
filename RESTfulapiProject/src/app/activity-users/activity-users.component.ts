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
  
   constructor(private user:UserServiceService , private service:PokemonServiceService) { }
  
   ngOnInit() {
   }


   LogIn(event){ 
      //console.log(this.email , this.pass);
      if (this.email == "test" && this.pass == "test"){
         this.user.setUserLoggedIn();
         this.service.CheckLoginTrue();

      }
    }

    LogOut(event){
       this.user.setUserLogOut();
       this.service.CheckLoginFalse();
     //this.user.
    }
  
}