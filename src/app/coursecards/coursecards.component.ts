import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-course-overview',
  templateUrl: './coursecards.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions
  ]
})
export class CoursecardsComponent {
  courses = [
    {
      title: 'Einführung in Angular',
      subtitle: 'Grundlagen und erste Schritte',
      description: 'Lerne die Grundlagen von Angular und baue deine erste Webanwendung.',
      image: 'assets/angular-course.jpg'
    },
    {
      title: 'Erweiterte Angular-Techniken',
      subtitle: 'Fortgeschrittene Konzepte',
      description: 'Vertiefe dein Wissen über Angular mit fortgeschrittenen Techniken und Best Practices.',
      image: 'assets/angular-advanced.jpg'
    },
    {
      title: 'Angular und RxJS',
      subtitle: 'Reaktive Programmierung',
      description: 'Erfahre, wie du reaktive Programmierung mit RxJS in Angular nutzen kannst.',
      image: 'assets/angular-rxjs.jpg'
    }
  ];
}
