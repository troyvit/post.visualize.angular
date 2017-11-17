import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroSearchComponent } from './heroes/hero-search.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { environment } from '../environments/environment';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavlistComponent } from './nav/navlist/navlist.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDyLLiWiT-06IRuzkthsVFizXiKTc0JmjE",
  authDomain: "angular-tour-of-heroes-c1e0d.firebaseapp.com",
  databaseURL: "https://angular-tour-of-heroes-c1e0d.firebaseio.com",
  projectId: "angular-tour-of-heroes-c1e0d",
  storageBucket: "angular-tour-of-heroes-c1e0d.appspot.com",
  messagingSenderId: "213814794219"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    UserProfileComponent,
    NavComponent,
    NavlistComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
