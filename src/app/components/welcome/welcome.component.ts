import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScreenSizeService } from '../../services';

@Component({
  selector: 'app-welcome',
  imports: [ NgOptimizedImage ],
  templateUrl: './welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent { 

  public readonly screenSizeService = inject(ScreenSizeService)



}
