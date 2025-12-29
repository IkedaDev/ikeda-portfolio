import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import { DatePipe } from '@angular/common'; // <--- Importamos DatePipe
import { InViewportDirective } from '@directives/in-viewport.directive';
import { ExperienceCard } from '@interfaces/app';

@Component({
  selector: 'app-experience-card',
  imports: [InViewportDirective, DatePipe], // <--- Lo agregamos a los imports
  templateUrl: './experience-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent implements OnInit {
  public data = input.required<ExperienceCard>();

  ngOnInit(): void {
    this.data().image.withBackground ??= true;
  }

  // Función para determinar si sigue trabajando ahí
  isCurrent(date: Date): boolean {
    const now = new Date();
    // Si la fecha es del mismo mes y año que hoy, asumimos "Presente"
    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }
}
