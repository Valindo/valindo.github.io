import {Routes, RouterModule} from '@angular/router'
import {PlannerComponent} from './planner.component'
import {PlannerViewComponent} from './plannerview.component'

export const plannersRoutes: Routes = [
	{ path:'planners', component: PlannerComponent},
	{ path:'planner/:id', component: PlannerViewComponent}
];

export const plannersRouting = RouterModule.forChild(plannersRoutes);