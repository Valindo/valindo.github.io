import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Planner} from './planner'
import {PlannerService} from './planner.service'
import {Subscription} from 'rxjs/Subscription'


@Component({
	selector: 'planner-view',
	templateUrl: 'app/planner/plannerview.component.html'
})

export class PlannerViewComponent implements OnInit, OnDestroy {
	planner: Planner;
	private sub: Subscription;

	constructor(private elementRef: ElementRef,
		private router: Router,
		private route: ActivatedRoute,
		private plannerService: PlannerService){}

	ngAfterViewInit(){
		setTimeout(()=>{
			var t = document.createElement('script');
			t.type = 'text/javascript';
			t.src = 'js/img-carousel-fix.js';
			this.elementRef.nativeElement.appendChild(t);	
		},100)
	}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params =>{
			let id = +params['id'];
			this.plannerService.getPlanner(id)
			.subscribe(
				planner => this.planner = planner,
				error => console.log(error)
				);
		});		
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}
