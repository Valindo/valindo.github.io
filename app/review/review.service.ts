import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs, RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable'


@Injectable()
export class ReviewService{

	baseUrl = 'http://205.147.100.109/reviews'
	constructor(private _http: Http){
		
	}
	postReview(type:number, picture_url:string, name:string, comment:string, rating:number, object_id:number){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		switch(type){
			case 1:
			console.log("I reach venues")
			return this._http.post(this.baseUrl, JSON.stringify({
				name: name,
				display_picture: picture_url,
				comment: comment,
				venue_id: object_id,
				rating: rating
			}), { headers: headers}).subscribe(data => console.log(data));

			case 2:
			console.log("I reach caterers")
			return this._http.post(this.baseUrl, JSON.stringify({
				name: name,
				display_picture: picture_url,
				comment: comment,
				caterer_id: object_id,
				rating: rating
			}), { headers: headers}).subscribe(data => console.log(data));

			case 3:
			console.log("I am Planner")
			return this._http.post(this.baseUrl, JSON.stringify({
				name: name,
				display_picture: picture_url,
				comment: comment,
				planner_id: object_id,
				rating: rating
			}), { headers: headers}).subscribe(data => console.log(data));
		}
	}

	private handleError(error: any){
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
    }
}