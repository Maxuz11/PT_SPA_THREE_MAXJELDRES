import { ArbolesComponent } from './pages/arboles/arboles.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'inicio', component: ArbolesComponent}
  ,{ path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
