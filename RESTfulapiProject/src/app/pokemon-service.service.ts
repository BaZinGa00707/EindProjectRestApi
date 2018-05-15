import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { PokemonInterface } from './pokemon-interface';



@Injectable()
export class PokemonServiceService {

private ApiUrl = "";

  constructor(private http:Http) { }
    
  getPosts(): Observable<PokemonInterface[]> {
    return this.http
         .get(this.ApiUrl)
         .map((Response: Response) => {
           return <PokemonInterface[]>Response.json();
         })
         .catch(this.handleError);
  }

  private handleError(error : Response){
    return Observable.throw(error.statusText);
  }

}


export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  ability: Ability;
  hp: string;
  retreatCost: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  text: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  evolvesFrom: string;
}

export interface RootObject {
  cards: Card[];
}