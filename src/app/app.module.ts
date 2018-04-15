import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

import { ClarityModule } from "clarity-angular";
import { ClarityIcons } from 'clarity-icons';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app/app.component';
//import { AppRoutingModule } from './app-routing.module';////////////////
import { NavComponent } from './nav/nav.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { environment } from '../environments/environment';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PlantComponent } from './plant/plant.component';
import { DownloadsComponent } from './plant/downloads/downloads.component';
import { TableComponent } from './plant/table/table.component';
import { TableRowComponent } from './plant/table-row/table-row.component';

import { DataService } from './data.service';

import { routes } from './app.router';  //////////////////

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
    ClarityModule.forRoot(),
    FormsModule,
    //AppRoutingModule,////////////////////////////////////
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule,
    routes, /////////////////
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    UserProfileComponent,
    NavComponent,
    SidenavComponent,
    PlantComponent,
    DownloadsComponent,
    TableComponent,
    TableRowComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
