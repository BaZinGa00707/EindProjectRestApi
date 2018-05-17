import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})
export class MainActivityComponent implements OnInit {





  constructor(private http: HttpClient ){}
  
  
  
  ngOnInit(): void {
    this.http.get('https://api.pokemontcg.io/v1/cards?').subscribe(data => {
      console.log(data);
    })
}


}
