import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {venuesRouting} from './venue.routing'
import {VenueComponent} from './venue.component'
import {VenueviewComponent} from './venueview.component'
import {VenueService} from './venue.service'

@NgModule({
	imports: [CommonModule, venuesRouting],
	declarations: [VenueComponent, VenueviewComponent],
	providers: [VenueService]
})

export class VenueModule{}