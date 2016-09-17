import {Component, ElementRef, OnInit} from '@angular/core'
import {CatererService} from './caterer.service'
import {Caterer} from './caterer'

import {Router} from '@angular/router'

@Component({
	selector: 'caterer',
	templateUrl: 'app/caterer/caterer.component.html',
	providers: [CatererService]
})

export class CatererComponent implements OnInit {
	caterers: Caterer[];

	constructor(private elementRef: ElementRef,
				private router: Router,
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

	goToCaterer(caterer: Caterer){
		this.router.navigate(['/caterer', caterer.id]);
	}

	ngOnInit(){
		this.catererService.getCaterers()
							.subscribe(
								caterers => this.caterers = caterers,
								error => console.log(error)
							);
	}
}