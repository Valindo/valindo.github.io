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

	ngAfterViewInit(){
		setTimeout(()=>{
			var t = document.createElement('script');
			t.type = 'text/javascript';
			t.src = 'js/img-carousel-fix.js';
			this.elementRef.nativeElement.appendChild(t);	
		},100)
	}

	typeColor(dish_type: string){
		if(dish_type == "Veg"){
			return "text-success";
		} else {
			return "text-danger";
		}
	}
}
