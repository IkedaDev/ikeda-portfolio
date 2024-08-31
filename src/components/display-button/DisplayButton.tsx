import React from "react";
import Icon from "../../assets/images/icons/arrow.png";

interface Props{
    label: string,
    iconOrientation?: 'right',
    selected?: boolean,
    handlerClick?: () => void,
}

export const DisplayButton: React.FC<Props> = ({ handlerClick = () => {}, ...props}: Props) => {
    return(<>
        <div 
            className={`
                w-full flex justify-between items-center px-8 h-20 rounded-md cursor-pointer
                ${props.selected ? 'bg-primary text-white' : 'text-black'}
                `}
            onClick={handlerClick}
        >
            <div className="text-4xl">
                {props.label}
            </div>
            {
                props.selected &&
                (
                    <span>
                        <img src={Icon} alt="Icon" />
                    </span>
                )
            }
        </div>
    </>)
}