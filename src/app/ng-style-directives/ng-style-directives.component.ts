import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-ng-style-directives',
	templateUrl: './ng-style-directives.component.html',
	styleUrls: ['./ng-style-directives.component.scss'],
})
export class NgStyleDirectivesComponent implements OnInit {
	color!: string
	fontSize!: number
	constructor() {}

	ngOnInit(): void {}

	apply(color: string, fontSize: number) {
		this.color = color
		this.fontSize = fontSize
	}
}
