import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'

@Injectable()
export class PlannerService{
	constructor(private http: Http){}

	private _baseUrl = "http://205.147.100.109";
	private planners_req = "/planners";

	getPlanners(){
		return this.http.get(this._baseUrl + this.planners_req + '.json')
						.map(this.extractPlannersData)
						.catch(this.handleError);
	}

	getPlanner(id: number){
		return this.http.get(this._baseUrl + this.planners_req + '/' + id + '.json')
						.map(this.extractPlannerData)
						.catch(this.handleError);
	}

	private extractPlannersData(res: Response){
		let body = res.json();
		return body['planners'];
	}

	private extractPlannerData(res: Response){
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