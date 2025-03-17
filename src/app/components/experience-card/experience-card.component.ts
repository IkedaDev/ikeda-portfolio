import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { InViewportDirective } from '@directives/in-viewport.directive';
import { ExperienceCard } from '@interfaces/app';



@Component({
  selector: 'app-experience-card',
  imports: [InViewportDirective],
  templateUrl: './experience-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent implements OnInit{

  public data = input.required<ExperienceCard>()

  ngOnInit(): void {
    this.data().image.withBackground ??= true;
  } 

}
