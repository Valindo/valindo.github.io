import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component'
import {BottomComponent} from './bottom/bottom.component'
import {HomeComponent} from './home/home.component'

import {VenueModule} from './venue/venue.module'
import {CatererModule} from './caterer/caterer.module'
import {PlannerModule} from './planner/planner.module'
import {HttpModule, JsonpModule} from '@angular/http'

import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from './app.routing'


@NgModule({
  imports:      [ BrowserModule, 
  				  routing, 
  				  VenueModule, 
  				  CatererModule, 
  				  PlannerModule,
  				  HttpModule,
  				  JsonpModule ],
  declarations: [ AppComponent, NavbarComponent, BottomComponent, HomeComponent],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

