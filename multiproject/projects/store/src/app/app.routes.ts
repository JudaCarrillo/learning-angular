import { Routes } from '@angular/router';
import { ListComponent } from './Products/Domain/Pages/list/list.component';
import { AboutComponent } from './Info/Domain/Pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
