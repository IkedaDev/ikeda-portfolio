import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "@components/header/header.component";

@Component({
  selector: 'app-portfolio-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './portfolio-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLayoutComponent implements OnInit{ 

  private readonly metaService = inject(Meta)


  ngOnInit(): void {
    this.setServerConfiguration()


  }

  private setServerConfiguration(){
    this.metaService.addTag({name:'og:title', content:'IkedaDev'})
    this.metaService.addTag({name:'og:description', content:'Portafolio IkedaDev'})
    this.metaService.addTag({name:'og:url', content:'https://me.ikedadev.com'})
    this.metaService.addTag({name:'og:type', content:'website'})
    this.metaService.addTag({name:'og:site_name', content:'Portafolio IkedaDev'})
  }

}
