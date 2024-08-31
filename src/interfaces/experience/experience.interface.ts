export interface Experience {
    id: string
    button: { label: string, selected: boolean }
    text:string,
    period:{
        show: boolean,
        start: Date 
        end: Date 
    }
}