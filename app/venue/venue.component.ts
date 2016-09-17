import { Component , ElementRef, OnInit} from '@angular/core';
import { Venue } from './venue'
import { VenueService } from './venue.service'
import { Angulartics2On } from 'angulartics2/src/core/angulartics2On';

import { Router } from '@angular/router'

@Component({
	selector: 'venue',
	templateUrl: 'app/venue/venue.component.html',
	providers: [ VenueService ],
	directives: [Angulartics2On]
})

export class VenueComponent implements OnInit{
	venues: Venue[];

	constructor(private elementRef: ElementRef, 
				private router: Router, 
				private venueService: VenueService){}

	ngAfterViewInit(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'js/theme.js';
		this.elementRef.nativeElement.appendChild(s);

		var t = document.createElement('script');
		t.type = 'text/javascript';
		t.src = 'js/wow.min.js';
		this.elementRef.nativeElement.appendChild(t);

	}

	goToVenue(venue: Venue){
		this.router.navigate(['/venue', venue.id]);
	}

	ngOnInit(){
		this.venueService.getVenues()
						 .subscribe(
						 	venues => this.venues = venues,
						 	error => console.log(error)
						 );
	}

}