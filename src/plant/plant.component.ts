import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import * as Plotly from 'plotly.js';



@Component({
  selector: 'content',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plant = localStorage.getItem("plantName")



  constructor() {

   }

   ngOnInit() {

   }



}
