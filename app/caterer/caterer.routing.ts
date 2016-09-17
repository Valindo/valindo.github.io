import {Routes, RouterModule} from '@angular/router'
import {CatererComponent} from './caterer.component'
import {CatererViewComponent} from './catererview.component'

export const catererRoutes: Routes = [
	{ path:'caterers', component:CatererComponent},
	{ path:'caterer/:id', component:CatererViewComponent}
];

export const caterersRouting = RouterModule.forChild(catererRoutes);