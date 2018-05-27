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
import { Activity2Component } from './activity2/activity2.component';
import { Activity3Component } from './activity3/activity3.component';
import { Activity4Component } from './activity4/activity4.component';
import { Activity5Component } from './activity5/activity5.component';
import { Activity6Component } from './activity6/activity6.component';
import { Activity7Component } from './activity7/activity7.component';
import { ActivityUsersComponent } from './activity-users/activity-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MainActivityComponent,
    Activity2Component,
    Activity3Component,
    Activity4Component,
    Activity5Component,
    Activity6Component,
    Activity7Component,
    ActivityUsersComponent,
  
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
      { path: 'activity2', component: Activity2Component},
      { path: 'activity3', component: Activity3Component},
      { path: 'activity4', component: Activity4Component},
      { path: 'activity5', component: Activity5Component},
      { path: 'activity6', component: Activity6Component},
      { path: 'activity7', component: Activity7Component},
      { path: 'activityUsers', component: ActivityUsersComponent},
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
