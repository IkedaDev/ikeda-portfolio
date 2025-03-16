import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { WelcomeComponent } from '@components/welcome/welcome.component';
import { ServiceCard } from '@interfaces/app';

@Component({
  selector: 'app-welcome-page',
  imports: [WelcomeComponent, ServiceCardComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePageComponent { 

  public serviceCards = signal<ServiceCard[]>([
    {
      title:'Aplicaciones Web',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non.',
      image:'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png'
    },{
      title:'Paginas Web MVC',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. '  ,
      image:'https://cdn-icons-png.flaticon.com/64/10011/10011316.png'
    },{
      title:'APIS - Microservicios',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. '  ,
      image:'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png'
    }
  ])

}
