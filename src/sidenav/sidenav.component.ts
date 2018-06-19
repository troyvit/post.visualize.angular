import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


onClickMe(plantName) {
  localStorage.setItem("plantName", plantName);
   window.location.reload();


}

  //  set_localstorageplant(plant) {
  //
  // }


}
