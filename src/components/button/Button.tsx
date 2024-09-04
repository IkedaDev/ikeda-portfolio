import React from "react";

interface Props {
    children: React.ReactNode,
    type ?: 'button' | 'reset' | 'submit',
    handlerClick?: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button: React.FC<Props> = ({children, type = 'button', handlerClick = () => {} }: Props) => {
    
    return (
        <button 
            type={type} 
            onClick={handlerClick}
            className="bg-primary text-white rounded-2xl h-16 font-bold text-3xl outline-none min-w-min w-full text-center px-8"
        >
            {children}
        </button>
    )
}
