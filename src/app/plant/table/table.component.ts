import { Component, OnInit } from '@angular/core';
import {PlantComponent} from './../plant.component';
import {Observable} from 'rxjs/Observable';
import {DataService} from './../../data.service';

@Component({
  selector: 'plant-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    characters: any[];
    columns: string[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.columns = this.dataService.getColumns();
      this.characters = this.dataService.retrieveAllPlantData();
  }

}
