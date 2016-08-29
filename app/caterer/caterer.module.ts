import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {caterersRouting} from './caterer.routing'
import {CatererComponent} from './caterer.component'
import {CatererViewComponent} from './catererview.component'
import {CatererService} from './caterer.service'

@NgModule({
	imports: [CommonModule, caterersRouting],
	declarations: [CatererComponent, CatererViewComponent],
	providers:[CatererService]
})

export class CatererModule {}