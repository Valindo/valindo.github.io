import {Component, ElementRef, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {PlannerService} from './planner.service'
import {Planner} from './planner'

@Component({
	selector: 'planner',
	templateUrl: 'app/planner/planner.component.html',
	providers: [PlannerService]
})

export class PlannerComponent implements OnInit{
	planners: Planner[];

	constructor(private elementRef: ElementRef,
				private router: Router,
				private plannerService: PlannerService){}

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
		this.plannerService.getPlanners()
						   .subscribe(
						   		planners => this.planners = planners,
						   		error => console.log(error)
						   	);
	}

	gotoPlanner(planner: Planner){
		this.router.navigate(['/planner', planner.id]);
	}
}