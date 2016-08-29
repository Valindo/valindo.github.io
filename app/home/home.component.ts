import {Component, ElementRef} from '@angular/core'

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.component.html'
})

export class HomeComponent{
	constructor(private elementRef: ElementRef){}
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
}