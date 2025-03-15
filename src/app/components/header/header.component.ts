import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavItem } from '@interfaces/app'
import { ScreenSizeService } from '../../services';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  public isOpenMenu = signal<boolean>(false);
  public screenSize = inject(ScreenSizeService) 


  public navItems : NavItem[] = [
    { path: 'home', label:'Inicio' },
    { path: 'about', label:'Sobre mi' },
    { path: 'services', label:'Servicios' },
    { path: 'experience', label:'Experiencia' },
    { path: 'contact', label:'Contacto' },
  ]

  toggleMenu(){
    this.isOpenMenu.update(prev => !prev)
  }

}
