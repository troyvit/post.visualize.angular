import { Component, OnInit } from '@angular/core';

import { ClarityIcons } from 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  	ClarityIcons.add({"post-icon": `
	`});
  }

}
