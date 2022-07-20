import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-ng-css-directives',
	templateUrl: './ng-css-directives.component.html',
	styleUrls: ['./ng-css-directives.component.scss'],
})
export class NgCssDirectivesComponent implements OnInit {
	isBordered: boolean
	classObj: any
	classList: Array<string>

	constructor() {
		this.isBordered = true
		this.classList = ['blue', 'round']
		this.classObj = {}
	}

	ngOnInit(): void {
		this.toggleBorder()
	}

	toggleBorder(): void {
		this.isBordered = !this.isBordered
		this.classObj = {
			bordered: this.isBordered,
		}
	}
}
