import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { CoachesComponent } from './coaches/coaches';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: '**', redirectTo: '' }
];
