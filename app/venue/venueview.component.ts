import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs/Subscription'
import {VenueService} from './venue.service'
import {Venue} from './venue'


@Component({
	selector: 'venue-view',
	templateUrl: 'app/venue/venueview.component.html'
})

export class VenueviewComponent implements OnInit, OnDestroy{
	venue: Venue;
	private sub: Subscription;

	constructor(private elementRef: ElementRef,
		private router: Router,
		private venueService: VenueService,
		private route: ActivatedRoute){
	}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params =>{
			console.log("i reacher here");
			let id = +params['id'];
			this.venueService.getVenue(id)
			.subscribe(
				venue => this.venue = venue,
				error => console.log(error),
				() => console.log("venue is " + this.venue)
				);
		});
	}

	ngAfterViewInit(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'js/theme.js';
		this.elementRef.nativeElement.appendChild(s);

		var t = document.createElement('script');
		t.type = 'text/javascript';
		t.src = 'js/wow.min.js';
		this.elementRef.nativeElement.appendChild(t);
		
		setTimeout(()=>{
			var t = document.createElement('script');
			t.type = 'text/javascript';
			t.src = 'js/img-carousel-fix.js';
			this.elementRef.nativeElement.appendChild(t);	
		},1000)
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}
