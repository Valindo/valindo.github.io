import { Component, ViewContainerRef } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'
import {BottomComponent} from './bottom/bottom.component'

import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-google-analytics'

@Component({
	selector: 'my-app',
	directives: [NavbarComponent, BottomComponent],
	template: `
	<navbar></navbar>
	<router-outlet></router-outlet>
	<bottom></bottom>
	`
})
export class AppComponent { 
	private viewContainerRef: ViewContainerRef;
	public constructor(viewContainerRef:ViewContainerRef, angulartics2: Angulartics2, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
		this.viewContainerRef = viewContainerRef;
	}
}

