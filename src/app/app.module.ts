import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NgStyleDirectivesComponent } from './ng-style-directives/ng-style-directives.component'
import { NgIfDirectivesComponent } from './ng-if-directives/ng-if-directives.component'
import { NgSwitchcaseDirectivesComponent } from './ng-switchcase-directives/ng-switchcase-directives.component'
import { NgCssDirectivesComponent } from './ng-css-directives/ng-css-directives.component'

@NgModule({
	declarations: [
		AppComponent,
		NgStyleDirectivesComponent,
		NgIfDirectivesComponent,
		NgSwitchcaseDirectivesComponent,
		NgCssDirectivesComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
