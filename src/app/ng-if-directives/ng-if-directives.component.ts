import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-ng-if-directives',
	templateUrl: './ng-if-directives.component.html',
	styleUrls: ['./ng-if-directives.component.scss'],
})
export class NgIfDirectivesComponent implements OnInit {
	stringVar!: string

	constructor() {
		this.stringVar = 'C'
	}

	ngOnInit(): void {}
}
