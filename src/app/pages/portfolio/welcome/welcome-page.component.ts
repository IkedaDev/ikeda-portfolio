import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ExperienceCardComponent } from '@components/experience-card/experience-card.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { WelcomeComponent } from '@components/welcome/welcome.component';
import { ExperienceCard, ServiceCard } from '@interfaces/app';

@Component({
  selector: 'app-welcome-page',
  imports: [WelcomeComponent, ServiceCardComponent, ExperienceCardComponent],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePageComponent implements OnInit{ 

  public displayExperienceCards = signal<ExperienceCard[]>([])
  public serviceCards = signal<ServiceCard[]>([
    {
      title:'Aplicaciones Web',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non.',
      image:'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png'
    },{
      title:'Paginas Web',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. '  ,
      image:'https://cdn-icons-png.flaticon.com/64/10011/10011316.png'
    },{
      title:'APIS - Microservicios',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. '  ,
      image:'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png'
    }
  ])

  public experienceCards = signal<ExperienceCard[]>([
    {
      title:'Confuturo',
      image:{
        src:'https://z-p3-scontent.fqrc2-1.fna.fbcdn.net/v/t39.30808-1/347432503_638493701647223_67128603948623409_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeEp-KC8t5X0cVinmIoFbpdbwRoeNwUnT6zBGh43BSdPrHtM1sERxGsK3OtC4xq9uxN6C4dyNDf9cEaG3JME4Dux&_nc_ohc=hxorICXwi9MQ7kNvgE3ccSE&_nc_oc=Adi6OIHWFjKF7YfxW0WZ36XCA0GqZQxroVNLGMejpnozjBF7DUnlA2BbBgi1Ot09_Jw&_nc_zt=24&_nc_ht=z-p3-scontent.fqrc2-1.fna&_nc_gid=LyQNisiyeNXldWP3Eyklpw&oh=00_AYGc8hy1BcGzNJwZH9A7VH-qeTEhiTzRUAtQnmsc_eah5w&oe=67DE7250',
        withBackground: false,
      },
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. ',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Nexia',
      image:{
        src:'https://nexia.cl/assets/NexIA.svg',
      },
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. ',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Opticad-Lux',
      image:{
        src:'https://opticad-lux.cl/assets/logo.png',
      },
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. ',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'TGT',
      image:{
        src:'https://tgtgroup.cl/wp-content/uploads/2021/07/logo_tgt_100x50.png',
      },
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. ',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Anami Masoterapia',
      image:{
        src:'https://anami.ikedadev.com/assets/imgs/anami-logo.png',
        withBackground: true,
      },
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae distinctio rerum iusto eveniet expedita tenetur exercitationem molestias maiores excepturi earum nesciunt illum quae, sed accusantium dignissimos ullam reprehenderit non. ',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
  ])

  ngOnInit(): void {
    this.displayExperienceCards.set(this.experienceCards().slice(0,3))
  }

  displayMoreExperience(){
    const currentLength = this.displayExperienceCards().length
    if(currentLength === this.experienceCards().length){
      this.displayExperienceCards.set(this.experienceCards().slice(0,3))
    }
    const next = this.experienceCards().slice(currentLength, currentLength + 3)
    this.displayExperienceCards.set([...this.displayExperienceCards(), ...next])
  }  

  

}
