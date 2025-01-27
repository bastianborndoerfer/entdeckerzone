import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PaypalComponent} from './paypal/paypal.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'buchung', component: PaypalComponent
  }
];
