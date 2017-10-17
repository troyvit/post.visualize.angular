import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
