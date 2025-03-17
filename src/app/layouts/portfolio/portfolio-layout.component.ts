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
    this.metaService.addTag({name:'og:image', content:'https://avatars.githubusercontent.com/u/44117850?s=400&u=23d8c1c5d4de54f22fff7d247515e616e076edd4&v=4'})
  }

}
