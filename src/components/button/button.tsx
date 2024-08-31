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
            className="bg-primary text-white rounded-2xl h-16 font-bold px-12 text-3xl outline-none lg:px-28"
        >
            {children}
        </button>
    )
}