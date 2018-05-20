import { Component, OnInit } from '@angular/core';
import { ICards, PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-activity4',
  templateUrl: './activity4.component.html',
  styleUrls: ['./activity4.component.css']
})
export class Activity4Component implements OnInit {

  _search: string = "Dragon";
  Pokemon: ICards[];
 
  
    constructor(private service: PokemonServiceService) { }
  
    ngOnInit():void  {
      this.service.getTypes(this._search).subscribe(data => this.Pokemon = data);
    }
  
    get Search() {
      return this._search;
    } 
  
    set Search(value: string) {
      this._search = value;
      this.service.getTypes(this._search).subscribe(data => this.Pokemon = data);
    }

}
