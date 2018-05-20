import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, ICards } from '../pokemon-service.service';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.css']
})
export class Activity3Component implements OnInit {

  _search: string = "pikachu";
  Pokemon: ICards[];
  PokemonUrl :string = "https://images.pokemontcg.io/sm4/30.png"
  
    constructor(private service: PokemonServiceService) { }
  
    ngOnInit():void  {
      this.service.getPokemon(this._search).subscribe(data => this.Pokemon = data);
    }
  
    get Search() {
      return this._search;
    } 
  
    set Search(value: string) {
      this._search = value;
      this.service.getPokemon(this._search).subscribe(data => this.Pokemon = data);
    }
  
                
 }

 

