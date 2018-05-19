import { Component, OnInit } from '@angular/core';
import { PokemonServiceService, ICards } from '../pokemon-service.service';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {

 _search: string = "charizard";
Pokemon: ICards[];
PokemonUrl :string = "https://images.pokemontcg.io/xyp/XY121.png"

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
