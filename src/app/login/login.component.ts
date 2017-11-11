import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {

    if (auth.user){
      console.log("you're already logged in!", auth.user)
    }

  }

  loginGoogle() {
    this.auth.googleLogin()
  }

  l() {

  }


  ngOnInit() {
  }

}
