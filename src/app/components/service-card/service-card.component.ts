import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InViewportDirective } from '@directives/in-viewport.directive';
import { ServiceCard } from '@interfaces/app';

@Component({
  selector: 'app-service-card',
  imports: [InViewportDirective],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent { 

  public data = input.required<ServiceCard>()

}
