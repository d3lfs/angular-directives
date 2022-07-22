import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-ng-nonbindable-directives',
	templateUrl: './ng-nonbindable-directives.component.html',
	styleUrls: ['./ng-nonbindable-directives.component.scss'],
})
export class NgNonbindableDirectivesComponent implements OnInit {
	context!: string

	constructor() {
		this.context = 'this is a non bindable directive'
	}

	ngOnInit(): void {}
}
