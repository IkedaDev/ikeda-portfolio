import { Experience } from "../../interfaces";


export const data: Experience[] = [
    {
        id:'1',
        button: { label: 'Target Technology Group', selected: true },
        period:{ start: new Date("01-01-2022"), end: new Date("01-02-2023"), show: true },
        text: `
            <br/>
            <p><strong>Trabajando en TGT, construí un sistema para la generación de endosos en pólizas de seguros utilizando microservicios y una arquitectura BFF.</strong></p>
            <p>El <strong>Frontend</strong> fue desarrollado con <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>RxJS</strong>, <strong>Angular Material</strong>, <strong>PrimeNG</strong>, y <strong>Sass</strong>.</p>
            <p>El <strong>Backend</strong> se construyó en <strong>.NET</strong> y consistió en dos servicios:</p>
            <ol>
                <li><strong>API Middleware</strong>: Se encargaba de la lógica de negocio y de todas las funciones necesarias para realizar un endoso directamente.</li>
                <li><strong>API BFF</strong>: Esta API conectaba la Middleware con el Frontend y otros servicios. Su principal función era procesar los datos en el Backend, para que el Frontend no tuviera que realizar este procesamiento.</li>
            </ol>
        `
    },{
        id:'2',
        button: { label: 'Nexia', selected: false },
        period:{ start: new Date("01-01-2022"), end: new Date("01-02-2023"), show: true },
        text: '2'
    },{
        id:'3',
        button: { label: 'Confuturo', selected: false },
        period:{ start: new Date("01-01-2022"), end: new Date("01-02-2023"), show: true },
        text: '3'
    },{
        id:'4',
        button: { label: 'Otros', selected: false },
        period:{ start: new Date("01-01-2022"), end: new Date("01-02-2023"), show: false, },
        text: '4'
    },
]