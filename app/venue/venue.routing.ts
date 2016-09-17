import {Routes, RouterModule} from '@angular/router'
import {VenueComponent} from './venue.component'
import {VenueviewComponent} from './venueview.component'

const venuesRoutes: Routes = [
	{ path:'venues', component: VenueComponent},
	{ path:'venue/:id', component: VenueviewComponent}
];

export const venuesRouting = RouterModule.forChild(venuesRoutes);