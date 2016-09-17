import {Component, ViewChild} from '@angular/core'
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component'
@Component({
	selector: 'contact-button',
	templateUrl: 'app/contactbutton/contactbutton.component.html',
	inputs: ['object', 'object_type']
})

export class ContactButtonComponent{
	@ViewChild('childModal') public childModal:ModalDirective;
	public showChildModal():void {
		this.childModal.show();
	}

	public hideChildModal():void {
		this.childModal.hide();
	}

}
