import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceCard } from '@interfaces/app';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent { 

  public data = input.required<ServiceCard>()

}
