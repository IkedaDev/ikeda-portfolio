import React from "react";
import Icon from "@/assets/images/icons/arrow-02.svg";

interface Props{
    label: string,
    iconOrientation?: 'right' | 'bottom'
    selected?: boolean,
    handlerClick?: () => void,
}

export const DisplayButton: React.FC<Props> = ({ handlerClick = () => {}, iconOrientation = 'right', ...props}: Props) => {
    return(<>
        <div 
            className={`
                w-full flex justify-between items-center px-8 h-16 md:h-20 rounded-md cursor-pointer
                ${props.selected ? 'bg-primary text-white' : 'text-black'}
                `}
            onClick={handlerClick}
        >
            <div className="text-3xl md:text-4xl">
                {props.label}
            </div>
            {
                props.selected &&
                (
                    <span>
                        <img src={Icon} alt="Icon" className={` scale-75 md:scale-100
                                ${iconOrientation == "bottom" && 'rotate-90' }
                            `} />
                    </span>
                )
            }
        </div>
    </>)
}