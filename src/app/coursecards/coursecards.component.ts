import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coursecards',
  templateUrl: './coursecards.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    NgForOf,
    MatCardImage
  ]
})
export class CoursecardsComponent {
  courses = [
    {
      title: 'Einfache Stromkreise',
      subtitle: 'Grundlagen und erste Schritte',
      description: 'Lerne die Grundlagen von Angular und baue deine erste Webanwendung.',
      image: 'assets/circuit.jpg'
    },
    {
      title: 'Wo ist was?',
      subtitle: 'Fortgeschrittene Konzepte',
      description: 'Vertiefe dein Wissen über Angular mit fortgeschrittenen Techniken und Best Practices.',
      image: 'assets/teaching.jpg'
    },{
      title: 'Wer bin ich? - über mich',
      subtitle: 'Julia Borndörfer geb. Schmaus',
      description: 'Vertiefe dein Wissen über Angular mit fortgeschrittenen Techniken und Best Practices.',
      image: 'assets/people.jpg'
    },
    {
      title: 'Töpferkurs',
      subtitle: 'Reaktive Programmierung',
      description: 'Erfahre, wie du reaktive Programmierung mit RxJS in Angular nutzen kannst.',
      image: 'assets/volume.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToBooking() {
    this.router.navigate(['/buchung']);
  }
}
