import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainActivityComponent } from './main-activity/main-activity.component';
import { FormsModule} from "@angular/forms"
import { HttpModule} from "@angular/http"
import {HttpClientModule } from '@angular/common/http';
import { PokemonServiceService } from './pokemon-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MainActivityComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'main', component: MainActivityComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ], { useHash: true }),
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [
    PokemonServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
