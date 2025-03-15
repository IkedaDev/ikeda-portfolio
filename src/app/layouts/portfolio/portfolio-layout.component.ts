import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "@components/header/header.component";

@Component({
  selector: 'app-portfolio-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './portfolio-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLayoutComponent { }
