import {Component} from '@angular/core';
import {Auth} from './auth.service';
import {Venue} from '../venue/venue';
import {ReviewService} from './review.service'

@Component({
	selector: 'review',
	providers:[Auth, ReviewService],
	templateUrl: 'app/review/review.component.html',
	inputs: ['object_type', 'object', 'comment']
})

export class ReviewComponent{
	public object_type:number;
	public rate:number = 0;
	public object:any;
	public overStar:number;
	public percent:number;
	public max = 5;
	public comment:string;
	public commentSuccess = false;

	constructor(private auth: Auth, private _review: ReviewService){

	}

	public hoveringOver(value:number):void {
		this.overStar = value;
		this.percent = 100 * (value / this.max);
	};

	public resetStar():void {
		this.overStar = void 0;
	}

	postComment(){
		this._review.postReview(this.object_type,  this.auth.userProfile.picture ,this.auth.userProfile.name,this.comment, this.rate, this.object.id)
		this.commentSuccess = true
	}
}