import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { ChartService} from '../chart.service'
import * as _ from 'lodash'
// import * as Plotly from 'plotly.js'
import * as Plotly from 'plotly.js/dist/plotly.js';
import {Config, Data, Layout} from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'plant-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.basicChart()
  }


  basicChart() {
     const element = this.el.nativeElement
  Plotly.d3.json("https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC%20LIMIT%20100&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo", function(err, data){
  function unpack_data(data, key) {
   const rows = data["rows"]
    const columns = data["columns"]
 return rows.map(function(row) { return row[columns.indexOf(key)]; });
 }
 function unpack_time(data, key){
   const times = unpack_data(data, key)
   return times.map(function(time) { return time.replace(/(\d*)?\/(\d*)?\/(\d*)?/g, '$3-$1-$2')})
 }
  const trace1 = {
 type: "scatter",
 mode: "lines",
 name: 'Turbiedad de agua cruda',
 x: unpack_time(data, 'timeFinished'),
 y: unpack_data(data, 'rawWaterTurbidity'),
 line: {color: '#17BECF'}
 }
  const trace2 = {
 type: "scatter",
 mode: "lines",
 name: 'Turbiedad de agua decantada',
 x: unpack_time(data, 'timeFinished'),
 y: unpack_data(data, 'settledWaterTurbidity'),
 line: {color: '#7F7F7F'}
 }
  const trace3 = {
 type: "scatter",
 mode: "lines",
 name: 'Turbiedad de agua filtrada',
 x: unpack_time(data, 'timeFinished'),
 y: unpack_data(data, 'filteredWaterTurbidity1'),
 line: {color: '#66ff66'}
 }
  const trace4 = {
 type: "scatter",
 mode: "lines",
 name: 'Dosis de coagulantes',
 yaxis: "y2",
 x: unpack_time(data, 'timeFinished'),
 y: unpack_data(data, 'coagulantDose'),
 line: {color: '#CCFF66'}
 }
  const data1 = [trace1,trace2,trace3,trace4]
  const layout1 =
{
"title": localStorage.getItem("plantName"),
"autosize": true,
"yaxis": {
 "title": "Turbiedad (UTN)",
 "type": "linear",
 "autorange": true,
 "side":"left"
},
"yaxis2": {
 "title": "mg/L",
 "overlaying": "y",
 "anchor": "x",
 "type": "linear",
 "autorange": true,
 "side": "right"
},
"xaxis": {
 "title": "Fecha",
 "type": "date",
 "autorange": true,
 "rangeslider": {
   "bordercolor": "#444",
   "thickness": 0.15,
   "bgcolor": "white",
   "borderwidth": 0,
   "autorange": true
  }
},
"legend": {
 "y": 1,
 "x": 1.1266666666666667
},
}
  Plotly.newPlot(element, data1, layout1);
  })
}
}
