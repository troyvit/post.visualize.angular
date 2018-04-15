import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PlantComponent } from './plant/plant.component';

export const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'plant', component: PlantComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
