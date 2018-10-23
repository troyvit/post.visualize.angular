import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'my-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {

  constructor(public auth:AuthService) { }

  sendPlantData(){
    var firebase = require("firebase/app"); // <-- use this to see emailVerified == true
    var user = firebase.auth().currentUser
    var form = document.getElementsByTagName("FORM")[0];
    var plantBoxes = form.getElementsByTagName("INPUT")
    var plants = []

    // fill plants with the checked plants
    for (let plant of Array.from(plantBoxes)){
      if ((<HTMLInputElement>document.getElementById((<HTMLInputElement>plant).value)).checked){
        plants.push((<HTMLInputElement>plant).value)
      }
    }

    console.log(user)
    console.log("plants", user.plants)
    this.auth.updateUserData(user, plants)
    console.log(plants)
  }

  ngOnInit() {
  }

}
