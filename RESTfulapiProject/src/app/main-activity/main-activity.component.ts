import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, ICards } from '../pokemon-service.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})
export class MainActivityComponent implements OnInit {


PokemonData: ICards[];


  constructor(private service: PokemonServiceService ){}
  
  /*ngOnInit(): void {
    this.service.getCards()
                .subscribe(data => {
                   this.PokemonData = data;
                })
               
      
      
    }
}*/
  
  ngOnInit(): void {
    this.service.getCards()
                .subscribe(data => {
                  console.log(data);
                })
               
      
      
    }
}



