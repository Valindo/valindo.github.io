import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http'

import {NavbarComponent} from './navbar/navbar.component'
import {BottomComponent} from './bottom/bottom.component'
import {HomeComponent} from './home/home.component'
import {ReviewComponent} from './review/review.component'
import {VenueComponent} from './venue/venue.component'
import {VenueviewComponent} from './venue/venueview.component'
import {CatererComponent} from './caterer/caterer.component'
import {CatererViewComponent} from './caterer/catererview.component'
import {PlannerComponent} from './planner/planner.component'
import {PlannerViewComponent} from './planner/plannerview.component'
import {AppComponent}  from './app.component';

import {routing, appRoutingProviders} from './app.routing'
import {venuesRouting} from './venue/venue.routing'
import {caterersRouting} from './caterer/caterer.routing'
import {plannersRouting} from './planner/planner.routing'

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap'
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-google-analytics';
import {ContactButtonComponent} from './contactbutton/contactbutton.component'


@NgModule({
  imports: [ BrowserModule, 
  				  routing, 
            venuesRouting,
            caterersRouting,
            plannersRouting,
  				  HttpModule,
  				  JsonpModule,
            Ng2BootstrapModule,
            Angulartics2Module.forRoot() ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  BottomComponent, 
                  HomeComponent, 
                  ReviewComponent,
                  VenueComponent,
                  VenueviewComponent,
                  CatererComponent,
                  CatererViewComponent,
                  PlannerComponent,
                  PlannerViewComponent,
                  ContactButtonComponent],
  providers: [appRoutingProviders, Angulartics2GoogleAnalytics],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

