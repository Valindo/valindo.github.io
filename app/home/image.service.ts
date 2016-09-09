import {Injectable} from '@angular/core';

@Injectable()
export class ImageService{
	image:string

	setImage(value:string){
		this.image = value;
	}

	getImage(){
		return this.image;
	}
}