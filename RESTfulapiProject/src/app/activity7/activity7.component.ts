import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, Pokemon } from '../pokemon-service.service';

@Component({
  selector: 'app-activity7',
  templateUrl: './activity7.component.html',
  styleUrls: ['./activity7.component.css']
})
export class Activity7Component implements OnInit {

  _search: number = 1;
  Pokemon: Pokemon;
 
  
    constructor(private service: PokemonServiceService) { }
  
    ngOnInit():void  {
      this.service.getPokemonsId(this._search).subscribe(data => this.Pokemon = data);
    }
  
    get Search() {
      return this._search;
    } 
  
    set Search(value: number) {
      this._search = value;
      this.service.getPokemonsId(this._search).subscribe(data => this.Pokemon = data);
    }
}
