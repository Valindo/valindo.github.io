import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {plannersRouting} from './planner.routing'
import {PlannerComponent} from './planner.component'
import {PlannerViewComponent} from './plannerview.component'
import {PlannerService} from './planner.service'

@NgModule({
	imports: [CommonModule, plannersRouting],
	declarations: [PlannerComponent, PlannerViewComponent],
	providers: [PlannerService]
})

export class PlannerModule{}