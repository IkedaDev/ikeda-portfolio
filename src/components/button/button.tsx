import React from "react";

interface Props {
    value: string
}

export const Button: React.FC<Props> = ({value}: Props) => {
    
    return (
        <button className="bg-primary text-white rounded-2xl h-20 font-bold px-28 text-3xl outline-none">
            {value}
        </button>
    )
}