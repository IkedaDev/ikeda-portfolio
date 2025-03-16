import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScreenSizeService } from '../../services';
import { InViewportDirective } from '@directives/in-viewport.directive';

@Component({
  selector: 'app-welcome',
  imports: [ InViewportDirective ],
  templateUrl: './welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent { 

  public readonly screenSizeService = inject(ScreenSizeService)

  

}
