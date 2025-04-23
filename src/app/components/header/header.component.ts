import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavItem } from '@interfaces/app'
import { ScreenSizeService } from '../../services';
import { ScrollToDirective } from '@directives/scrollTo.directive';
import { ClickOutsideDirective } from '@directives/click-outside.directive';

@Component({
  selector: 'app-header',
  imports: [ ScrollToDirective, ClickOutsideDirective ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  public isOpenMenu = signal<boolean>(false);
  public screenSize = inject(ScreenSizeService) 


  public navItems : NavItem[] = [
    { path: 'home', label:'Inicio', action:'id-home-section' },
    { path: 'about', label:'Sobre mi', action:'id-about-section' },
    { path: 'services', label:'Servicios', action:'id-services-section' },
    { path: 'experience', label:'Experiencia', action:'id-experience-section' },
    { path: 'contact', label:'Contacto', action:'id-contact-section' },
  ]

  toggleMenu(){
    this.isOpenMenu.update(prev => !prev)
  }

  clickOutsideResponsiveMenu(){
    this.isOpenMenu.set(false)
  }

}
