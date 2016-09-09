
import {Component, ElementRef, NgZone} from '@angular/core'
import {FacebookService} from './facebook.service'
import {ImageService} from './image.service'

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.component.html',
	providers:[FacebookService, ImageService]
})

export class HomeComponent{
	name=""
	isUser = false
	public pictureUrl = "Hello";
	constructor(private elementRef: ElementRef, private _ngZone: NgZone, private _facebookService: FacebookService, private _img: ImageService){}
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
			FB.api('/me?fields=id,name,picture.width(100).height(100)', function(response) {

				console.log(this.pictureUrl);
				this.name = response.name;
				this.isUser = true
				this._img.setImage(response.picture.data.url)
				
				console.log(response);
				console.log(response.name);
				console.log(response.picture.data.url);
				console.log(this.name);
				console.log(this._img.getImage());
			});

		});
	}
}