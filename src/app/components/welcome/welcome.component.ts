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

  openCV(){
    open('https://drive.google.com/file/d/1LiSbiPjuwd5mJkkoXPiifVVao1wm8aOz/view?usp=sharing','__blank')
  }

}
