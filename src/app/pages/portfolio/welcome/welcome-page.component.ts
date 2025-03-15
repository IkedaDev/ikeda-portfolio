import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeComponent } from '@components/welcome/welcome.component';

@Component({
  selector: 'app-welcome.page',
  imports: [WelcomeComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePageComponent { }
