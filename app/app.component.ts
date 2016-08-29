import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'
import {BottomComponent} from './bottom/bottom.component'

@Component({
  selector: 'my-app',
  directives: [NavbarComponent, BottomComponent],
  template: `
  		<navbar></navbar>
  		<router-outlet></router-outlet>
  		<bottom></bottom>
  `
})
export class AppComponent { }

