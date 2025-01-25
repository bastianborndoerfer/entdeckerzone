import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {BodyComponent} from '../body/body.component';

@Component({
  selector: 'app-main',
  imports: [
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.css'
})
export class MainComponent {

}
