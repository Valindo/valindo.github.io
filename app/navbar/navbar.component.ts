import {Component, ElementRef} from '@angular/core'
@Component({
	moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})

export class NavbarComponent{

	date = new Date();
	constructor(private elementRef: ElementRef){}
	ngAfterViewInit(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'app/navbar/navbar.script.js';
		this.elementRef.nativeElement.appendChild(s);
	}
}