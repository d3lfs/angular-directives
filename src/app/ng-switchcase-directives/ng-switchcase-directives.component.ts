import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-ng-switchcase-directives',
	templateUrl: './ng-switchcase-directives.component.html',
	styleUrls: ['./ng-switchcase-directives.component.scss'],
})
export class NgSwitchcaseDirectivesComponent implements OnInit {
	numVar: number
	stringVar: string
	choice: number

	constructor() {
		this.numVar = 45
		this.stringVar = 'sly'
		this.choice = 1
	}

	ngOnInit(): void {}

	nextChoice(): number {
		if (this.choice < 3) {
			this.choice++
		} else {
			this.choice = 1
		}
		return this.choice
	}
}
