import { Component, OnInit } from '@angular/core';
import { PokemonServiceService,  Trainers } from '../pokemon-service.service';

@Component({
  selector: 'app-activity6',
  templateUrl: './activity6.component.html',
  styleUrls: ['./activity6.component.css']
})
export class Activity6Component implements OnInit {

  _number : number = 10;
TrainerData: Trainers[];


  constructor(private service: PokemonServiceService ){}
  
  name: string;
  league: string;
  cards: string;

  ngOnInit(): void {
    this.service.getTrainers(this._number).subscribe(data => this.TrainerData = data);      
    }
               
    get Search() {
      return this._number;
    } 
  
    set Search(value: number) {
      this._number = value;
      this.service.getTrainers(this._number).subscribe(data => this.TrainerData = data);
    } 

    
                
    
}
