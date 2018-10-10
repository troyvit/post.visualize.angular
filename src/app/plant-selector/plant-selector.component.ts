import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {

  constructor() { }

  sendPlantData(){
    var x = document.getElementById("selectorForm");
    var i;
    var plants = new Array();
    for (i = 0; i < x.length ;i++) {
      if (x.elements[i].checked == true){
        plants.push(x.elements[i].name)
      }
    }
    console.log(plants)
    // Code so far works, we now just want to send the data to firebase

  }

  ngOnInit() {
  }

}
