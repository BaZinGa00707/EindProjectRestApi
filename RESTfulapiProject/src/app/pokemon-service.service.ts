import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;




@Injectable()
export class PokemonServiceService {

  check: boolean = false;
  checkUser: boolean = false;

  constructor(private http: HttpClient) { }

   getCards(number: number): Observable<ICards[]>{
    return this.http.get<ICards[]>(`https://api.pokemontcg.io/v1/cards?limit=100&page=${number}`)
  }


  getPokemon(pokemon:String): Observable<ICards[]>{
    return this.http.get<ICards[]>(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)   // ! `
  }

  getTypes(type:String): Observable<ICards[]>{
    return this.http.get<ICards[]>(`https://api.pokemontcg.io/v1/cards?types=${type}`)   // ! `
  }

  getPokeDexNumber(number: number): Observable<ICards[]>{
    return this.http.get<ICards[]>(`https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=${number}`)   // ! `
  }

  // eigen Api 

  getTrainers(number: number):Observable<Trainers[]>{
    return this.http.get<Trainers[]>(`http://localhost:2412/api/trainers?page0&length=${number}`)
  }

  getPokemonsId(number: number):Observable<Pokemon>{
    if(this.checkUser){
    return this.http.get<Pokemon>(`http://localhost:2412/api/pokemons/${number}`)}
  }

  postTrainer(n: string , l: string , c: number){
    this.http.post<Trainers>("http://localhost:2412/api/trainers" , 
    {
       name: n,
       league: l,
       cards: c
    
    })
    .subscribe(
      (data:any) => {
        /*console.log(data)*/
        if (data != null){ this.check = true;}
        else {this.check= false;}
      }
    )
  }

  postCheck(){
    return this.check;
  }

  CheckLoginTrue(){
    this.checkUser = true;
  }

  CheckLoginFalse(){
   this.checkUser = false;
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



export interface Trainers{
  id: string;
  name: string;
  league: string;
  cards: number;
}

export interface Pokemon{
  id: string;
  name: string;
  rarity: string;
  type: number;
  hp : number;
  image: string;
}