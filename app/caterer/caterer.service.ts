import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'

@Injectable()
export class CatererService{
	private _baseUrl = "http://205.147.100.109";
	private caterers_req = "/caterers";

	constructor(private http: Http){}

	getCaterers(){
		return this.http.get(this._baseUrl + this.caterers_req + '.json')
						.map(this.extractCaterersData)
						.catch(this.handleError);
	}

	getCaterer(id: number){
		return this.http.get(this._baseUrl + this.caterers_req + '/' + id + '.json')
						.map(this.extractCatererData)
						.catch(this.handleError);
	}

	private extractCaterersData(res: Response){
		let body = res.json();
		return body['caterers'];
	}

	private extractCatererData(res: Response){
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