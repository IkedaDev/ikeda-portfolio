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
      title:'Desarrollo de sitios web escalables',
      description:'Como desarrollador web, me especializo en la creación de sitios web robustos y escalables, utilizando tecnologías modernas para garantizar un rendimiento óptimo y la capacidad de crecer con las necesidades de tu empresa. Mi enfoque se centra en la eficiencia del código, la seguridad y la mantenibilidad a largo plazo.',
      image:'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png'
    },{
      title:'Optimización y mantenimiento de sitios web',
      description:'No solo desarrollo sitios web, sino que también ofrezco servicios de optimización y mantenimiento para asegurar que tu plataforma online funcione de manera eficiente y segura a lo largo del tiempo. Me mantengo actualizado con las últimas tendencias y mejores prácticas para garantizar la estabilidad y el rendimiento de tu sitio.'  ,
      image:'https://cdn-icons-png.flaticon.com/64/10011/10011316.png'
    },{
      title:'Integración y escalabilidad con APIs y microservicios',
      description:'Desarrollo APIs y arquitecturas de microservicios eficientes que permiten conectar sistemas existentes y escalar tu negocio de manera flexible. Utilizo tecnologías de vanguardia para garantizar seguridad, alto rendimiento y una integración sencilla con otras plataformas, permitiéndote innovar y crecer sin limitaciones.'  ,
      image:'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png'
    }
    // {
    //   title:'Aplicaciones Web',
    //   description:'Creación de aplicaciones web a medida, escalables y adaptadas a tus necesidades, con una experiencia de usuario excepcional. Todo desde tu navegador, sin necesidad de instalaciones complejas. Desarrolladas con tecnologías actuales para garantizar eficiencia y seguridad.',
    //   image:'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png'
    // },{
    //   title:'Paginas Web',
    //   description:'Diseño y desarrollo de páginas web modernas, rápidas y responsivas. Adaptadas a todos los dispositivos y alineadas con la identidad de tu marca. Utilizamos buenas prácticas de accesibilidad, SEO y rendimiento para lograr resultados óptimos.'  ,
    //   image:'https://cdn-icons-png.flaticon.com/64/10011/10011316.png'
    // },{
    //   title:'APIS - Microservicios',
    //   description:'Desarrollo de APIs robustas y microservicios eficientes que permiten conectar sistemas y escalar tu negocio. Utilizamos tecnologías modernas para garantizar seguridad, alto rendimiento y una integración sencilla con otras plataformas.'  ,
    //   image:'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png'
    // }
  ])

  public experienceCards = signal<ExperienceCard[]>([
    {
      title:'Confuturo',
      image:{
        src:'https://i.imgur.com/MQkxo98.jpeg',
        withBackground: true,
      },
      description:'En Confuturo me dedico a dar continuidad a diversas aplicaciones, las cuales pueden estar construidas con frontends como Angular, React, MVC de .NET, entre otras, y en microservicios que en su mayoría están realizados en C#. En mi día a día me piden realizar todo tipo de tareas, desde pequeñas correcciones hasta agregar nuevas funcionalidades.',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Nexia',
      image:{
        src:'https://nexia.cl/assets/NexIA.svg',
      },
      description:'Utilicé tecnologías como Angular e Ionic, y me ocupé del modelado de bases de datos y aspectos serverless. También programé en el frontend como Micro Frontend, asegurando la gestión del código a través de GIT para un flujo eficiente.',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Opticad-Lux',
      image:{
        src:'/assets/images/logo-opticad-lux.png',
      },
      description:'Creé una página web para una óptica en Rancagua utilizando HTML, CSS, TypeScript y Angular, junto con RxJS, Bootstrap, Angular Material y Sass. Además, desarrollé un backend en PHP con una base de datos MySQL, manteniendo el código bajo control con GIT.',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'TGT',
      image:{
        src:'https://tgtgroup.cl/wp-content/uploads/2021/07/logo_tgt_100x50.png',
      },
      description:'Desarrollé aplicaciones web completas para Confuturo, trabajando tanto en el frontend como en el backend. Utilicé tecnologías como HTML, CSS, JavaScript, TypeScript y Angular, junto con RxJS, Bootstrap, Angular Material, PrimeNG y Sass. Consumí APIs REST desarrolladas en .NET utilizando Entity Framework Core. Seguimos la metodología SCRUM y usamos GitLab para la gestión del código y los despliegues.',
      from: new Date(2021,5,1),
      to: new Date(2022,10,12),
    },
    {
      title:'Anami Masoterapia',
      image:{
        src:'https://anami.ikedadev.com/assets/imgs/anami-logo.png',
        withBackground: true,
      },
      description:'Creé una aplicación móvil como PWA para calcular el porcentaje de ganancia entre el masoterapeuta y el hotel, según el tipo de servicio ofrecido.',
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
