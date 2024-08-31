interface Data {
    id: string
    button: { label: string, selected: boolean }
    text:string
}

export const data: Data[] = [
    {
        id:'1',
        button: { label: 'Paginas / Aplicaciones Web', selected: true },
        text: `
            Cuento con conocimientos para crear paginas web con librerias reactivas como Angular, React y VueJS.
            Se utilizar gestores de estados como Redux para manejar el estado de las aplicaciones.
            Implementacion de WebSockets para comunicacion en tiempo real entre aplicaciones.
            Se trabajar con librerias como Sass, Material, Primeng, Taildwind para estilizar aplicaciones.
        `
    },
    {
        id:'3',
        button: { label: 'Servicios APIS Rest FULL', selected: false },
        text: '3'
    },
    {
        id:'4',
        button: { label: 'Microservicios', selected: false },
        text: '4'
    },
    {
        id:'5',
        button: { label: 'Arquitectura', selected: false },
        text: '5'
    },
    {
        id:'6',
        button: { label: 'Deployment', selected: false },
        text: '6'
    },
]