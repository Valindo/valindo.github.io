import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'

@Injectable()
export class VenueService {
	private _baseUrl = "http://205.147.100.109";
	private venues_req = "/venues";

	constructor(private http: Http){}

	getVenues(){
		return this.http.get(this._baseUrl + this.venues_req + ".json")
						.map(this.extractVenuesData)
						.catch(this.handleError);
	}

	getVenue(id: number){
		return this.http.get(this._baseUrl + this.venues_req + "/" + id + ".json")
						.map(this.extractVenueData)
						.catch(this.handleError);
	}

	private extractVenuesData(res: Response){
		let body = res.json();
		return body['venues'];
	}

	private extractVenueData(res: Response){
		let body = res.json();
		return body;
	}

	private handleError(error: any){
		let errMsg = (error.message) ? error.message :
      	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}
}