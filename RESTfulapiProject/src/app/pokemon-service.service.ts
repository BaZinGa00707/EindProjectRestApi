import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;




@Injectable()
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  get getCards(): Observable<ICards[]>{
    return this.http.get<ICards[]>('https://api.pokemontcg.io/v1/cards?limit=100')
  }


  getPokemon(pokemon:String): Observable<ICards[]>{
    return this.http.get<ICards[]>(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)   // ! `
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

export interface ICards {
  cards: Card[];
}