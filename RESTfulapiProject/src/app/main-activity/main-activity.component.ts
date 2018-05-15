import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemon-interface';
import { PokemonServiceService } from '../pokemon-service.service';


@Component({
  selector: 'app-main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})
export class MainActivityComponent implements OnInit {
  _dataArray : PokemonInterface[];


  constructor(private pokemonService: PokemonServiceService ){}
  
  getPosts(): void {
    this.pokemonService.getPosts()
          .subscribe(
            resultArray => this._dataArray = resultArray,
            error => console.log("Error ::" + error)
          )
  }
  
  ngOnInit(): void {
    this.getPosts();
}

}