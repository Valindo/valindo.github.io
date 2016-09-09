/// <reference path="fbsdk.d.ts" />
import {Component, ElementRef, NgZone} from '@angular/core'
import {FacebookService} from './facebook.service'

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.component.html',
	providers:[FacebookService]
})

export class HomeComponent{
	name=""
	isUser = false
	constructor(private elementRef: ElementRef, private _ngZone: NgZone, private _facebookService: FacebookService){}
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
		this._facebookService.loadAndInitFBSDK();
		// console.log("I reach here")
		// window.fbAsyncInit = function() {
		// 	FB.init(
		// 	{
		// 		appId      : '153757638403747',
		// 		xfbml      : true,
		// 		version    : 'v2.0'
		// 	}
		// 	);

		// 	FB.ui(
		// 	{
		// 		method: 'share',
		// 		href: 'https://developers.facebook.com/docs/dialogs/'
		// 	},
		// 	function(response) {
		// 		console.log(response);
		// 	}
		// 	);

			

		// 	// FB.api(
		// 	// 	"/me",
		// 	// 	"POST",
		// 	// 	function (fbResponse){
		// 	// 		console.log(fbResponse);
		// 	// 	}
		// 	// 	);
		// };
	}

	login(){
		FB.login(function(response) {
				console.log(response);
				if (response) {
					FB.api('/me',"GET", function(response) {
						this._ngZone.run(() => {
							this.name = this.response.name;
							this.isUser = true
						});
					});
				}else{
					console.log('User cancelled login or did not fully authorize.');
				}
			});
	}
}