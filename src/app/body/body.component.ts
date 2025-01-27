import { Component } from '@angular/core';
import {CoursecardsComponent} from '../coursecards/coursecards.component';

@Component({
  selector: 'app-body',
  imports: [
    CoursecardsComponent,
  ],
  templateUrl: './body.component.html',
  standalone: true,
  styleUrl: './body.component.css'
})
export class BodyComponent {

}

