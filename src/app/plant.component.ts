import {Component} from '@angular/core';
import {DataService} from './data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'content',
	templateUrl: './plant-component.html',
	styleUrls: ['./plant-component.css']
})

export class PlantCOmponent implements OnInit {
	constructor(
		private dataService: DataService,
		private route: ActivatedRoute) {
	}
}
