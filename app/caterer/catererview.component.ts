import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs/Subscription'
import {CatererService} from './caterer.service'
import {Caterer} from './caterer'

@Component({
	selector: 'caterer-view',
	templateUrl: 'app/caterer/catererview.component.html'
})

export class CatererViewComponent implements OnInit, OnDestroy{
	caterer: Caterer;
	private sub: Subscription;

	constructor(private elementRef: ElementRef,
				private router: Router,
				private route: ActivatedRoute,
				private catererService: CatererService){}

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

	ngOnInit(){
		this.sub = this.route.params.subscribe(params =>{
			let id = +params['id'];
			this.catererService.getCaterer(id)
							   .subscribe(
							   		caterer => this.caterer = caterer,
							   		error => console.log(error)
							   	);
		});
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}
