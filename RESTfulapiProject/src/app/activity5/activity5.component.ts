import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, ICards } from '../pokemon-service.service';

@Component({
  selector: 'app-activity5',
  templateUrl: './activity5.component.html',
  styleUrls: ['./activity5.component.css']
})
export class Activity5Component implements OnInit {

  _number: number  = 1;
  Pokemon: ICards[];
 
  
    constructor(private service: PokemonServiceService) { }
  
    ngOnInit():void  {
      this.service.getPokeDexNumber(this._number).subscribe(data => this.Pokemon = data);
    }
  
    get Search() {
      return this._number;
    } 
  
    set Search(value: number) {
      this._number = value;
      this.service.getPokeDexNumber(this._number).subscribe(data => this.Pokemon = data);
    }

    pokedexPlus(event){ 
      this._number++;
      this.service.getPokeDexNumber(this._number).subscribe(data => this.Pokemon = data);
    }
    pokedexMin(event){
      if (this._number > 1){
      this._number--;
      this.service.getPokeDexNumber(this._number).subscribe(data => this.Pokemon = data);
      }
    }

}
