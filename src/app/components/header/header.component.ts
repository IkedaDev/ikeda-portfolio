import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavItem } from '@interfaces/app'

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  public navItems : NavItem[] = [
    { path: 'home', label:'Inicio' },
    { path: 'about', label:'Sobre mi' },
    { path: 'services', label:'Servicios' },
    { path: 'experience', label:'Experiencia' },
    { path: 'contact', label:'Contacto' },
  ]

}
