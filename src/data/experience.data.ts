import { Experience } from "../interfaces";


export const data: Experience[] = [
    {
        id:'1',
        button: { label: 'Target Technology Group' },
        period:{ start: new Date("01-01-2022"), end: new Date("07-01-2023"), show: true },
        information: `
            <p>Trabajando en <strong>TGT</strong>, construí un sistema para la generación de <strong>endosos</strong> en pólizas de seguros utilizando <strong>microservicios</strong> y una arquitectura <strong>BFF</strong>.</p>
            <br />
            <p>El <strong>Frontend</strong> fue desarrollado con <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>RxJS</strong>, <strong>Angular Material</strong>, <strong>PrimeNG</strong>, y <strong>Sass</strong>.</p>
            <br />
            <p>El <strong>Backend</strong> se construyó en <strong>.NET</strong> y consistió en dos servicios:</p>
            <br />
            <ol>
                <li><strong>API Middleware</strong>: Se encargaba de la lógica de negocio y de todas las funciones necesarias para realizar un endoso directamente.</li>
                <li><strong>API BFF</strong>: Esta API conectaba la Middleware con el Frontend y otros servicios. Su principal función era procesar los datos en el Backend, para que el Frontend no tuviera que realizar este procesamiento.</li>
            </ol>
        `,
    },{
        id:'2',
        button: { label: 'Nexia' },
        period:{ start: new Date("07-01-2023"), end: new Date("11-01-2023"), show: true },
        information: `
            <p>Durante mi tiempo trabajando para <strong>Nexia</strong> estuve a cargo de crear un sistema para un <strong>supermercado</strong>, que tuviera <strong>gestión de tickets</strong> de reclamos, <strong>mantenciones de maquinaria</strong>, <strong>generador de reportes</strong>, y <strong>mantención de usuarios y locales.</strong></p>
            <br />
            <p>El sistema contaba con una aplicación para móviles desarrollada en <strong>Ionic</strong>, un sistema de <strong>Microfrontend</strong> para la web en donde se integró <strong>Angular</strong> y <strong>React</strong>, y <strong>microservicios serverless</strong> para el Backend con <strong>NodeJs</strong> y <strong>Typescript</strong>.</p>
            <br />
            <p>Utilice arquitectura de <strong>microfrontend</strong> para adaptar ciertas funcionalidades ya existentes dentro de la empresa que no querían ser cambiadas, además cree una <strong>librería de estilos CSS con Sass</strong> para que todos los proyectos siguieran las mismas guías de estilos.</p> 
            <br />
            <p>En este proyecto solo estuve totalmente a cargo del <strong>Front</strong>, un tiempo de la <strong>App mobile</strong> y los <strong>microservicios</strong> mientras llegaran otros programadores.</p>
        `,
    },{
        id:'3',
        button: { label: 'Confuturo' },
        period:{ start: new Date("11-06-2023"), show: true },
        information: `
            <p>En <strong>Confuturo</strong>, me encargo de corregir problemas, agregar funcionalidades y darle mantención a todos los proyectos del área web de la empresa. Estos incluyen aplicaciones web, como el portal de clientes, backend con arquitectura de microservicios, y bases de datos.</p>
            <br />
            <p>En mi día a día, manejo tecnologías como <strong>Angular</strong>, <strong>Redux</strong>, <strong>TypeScript</strong>, <strong>.NET</strong>, <strong>Oracle</strong>, y <strong>PostgreSQL</strong>, y, en menor medida, trabajo con aplicaciones desarrolladas en <strong>React</strong>, <strong>Node.js</strong></p>
        `
    },{
        id:'4',
        button: { label: 'Otros' },
        period:{ start: new Date("01-01-2022"), end: new Date("01-02-2023"), show: false, },
        information: `
            <h3 class='font-bold text-4xl mb-6'>Opticad-Lux</h3>
            <p class='mb-6' >Opticad-Lux es una óptica que me contactó para desarrollar su sitio web. El dueño quería una web de presentación con unos mantenedores simples para editar imágenes de un banner principal y las URLs e íconos de sus redes sociales. El sistema fue desarrollado con <strong>Angular</strong>, un backend en <strong>PHP</strong>, y una base de datos <strong>PostgreSQL</strong>.</p>
            <p><a href="https://opticad-lux.cl/" rel="noopener noreferrer" target="_blank">https://opticad-lux.cl/</a></p>
            <br />
            <h3 class='font-bold text-4xl mb-6'>Anami</h3>
            <p class='mb-6'>Anami es un emprendimiento de masoterapia para el cual desarrollé una aplicación PWA con <strong>Angular</strong>, diseñada para ser instalada como aplicación en dispositivos móviles. El propósito de esta aplicación es agendar masajes del día y calcular las ganancias entre el hotel y la masoterapeuta.</p>
            <p><a href="https://anami.ikedadev.com/" rel="noopener noreferrer" target="_blank">https://anami.ikedadev.com/</a></p>
        `
    },
]