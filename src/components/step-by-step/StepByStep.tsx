import React from "react";
import { StepByStepProps } from "@/interfaces/components";
import "./StepByStep.css"


export const StepByStep: React.FC<StepByStepProps> = ({ steps }:StepByStepProps) => {
    return(<>
        <div className="StepByStep flex justify-between relative">
            {
                steps.map((step) => 
                    <span className={`
                        w-14 h-14 flex items-center justify-center rounded-full
                        text-white font-bold text-3xl cursor-pointer
                        ${step.selected ? 'bg-ike-cyan' : 'bg-primary'}
                        `} key={step.id} onClick={step.onClick} >{step.label}</span>
                )
            }
        </div>
    </>)
}