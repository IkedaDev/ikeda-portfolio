export interface Experience {
    id: string
    button: { label: string }
    information:string,
    period:{
        show: boolean,
        start: Date 
        end?: Date 
    }
}