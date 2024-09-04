
export interface StepProps{
    id:string
    label: string,
    selected?: boolean,
    onClick?: () => void
}

export interface StepByStepProps{
    steps: StepProps[]
}