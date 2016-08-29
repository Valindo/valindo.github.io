import { Component , ElementRef, OnInit} from '@angular/core';
import { Venue } from './venue'
import { VenueService } from './venue.service'

import { Router } from '@angular/router'

@Component({
	selector: 'venue',
	templateUrl: 'app/venue/venue.component.html',
	providers: [ VenueService ]
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