import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, ICards } from '../pokemon-service.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})
export class MainActivityComponent implements OnInit {

_number : number = 1;
PokemonData: ICards[];


  constructor(private service: PokemonServiceService ){}
  
  ngOnInit(): void {
    this.service.getCards(this._number).subscribe(data => this.PokemonData = data);      
    }
               
    get Search() {
      return this._number;
    } 
  
    set Search(value: number) {
      this._number = value;
      this.service.getCards(this._number).subscribe(data => this.PokemonData = data);
    } 
                
    }

    

  
 /* ngOnInit(): void {
    this.service.getCards()
                .subscribe(data => {
                  console.log(data);
                })
               
      ss
      
    }
  }*/



