import { Component , OnInit } from '@angular/core';
import { PokemonServiceService } from "./pokemon-service.service";
import { PokemonInterface } from "./pokemon-interface"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
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
