import React from "react";
import { ICON_CARD_IMAGE, IconCardProps } from "@/interfaces/components";

import WHATSAPP from "@/assets/images/icons/whatsapp.svg"
import GMAIL from "@/assets/images/icons/gmail.svg"
import INSTAGRAM from "@/assets/images/icons/instagram.svg"
import DISCORD from "@/assets/images/icons/discord.svg"
import TIKTOK from "@/assets/images/icons/tiktok.svg"

const icons: {[key in ICON_CARD_IMAGE] ?: string} = {
    [ICON_CARD_IMAGE.WHATSAPP] : WHATSAPP,
    [ICON_CARD_IMAGE.GMAIL] : GMAIL,
    [ICON_CARD_IMAGE.INSTAGRAM] : INSTAGRAM,
    [ICON_CARD_IMAGE.DISCORD] : DISCORD,
    [ICON_CARD_IMAGE.TIKTOK] : TIKTOK,
}

export const IconCard: React.FC<IconCardProps> = ({icon, label, size = 'normal'}: IconCardProps) => {
    return (<>
        <div className="flex gap-8 items-center">
            <div className={`
                    flex items-center justify-center bg-primary  rounded-md
                    ${size === 'small' ? 'min-w-[50px] min-h-[50px]' : 'min-w-[80px] min-h-[80px]' }
                `}>
                <img src={icons[icon]} alt="Icono" className={`
                        ${size === 'small' && 'scale-75' }
                    `} />
            </div>
            {
                label && <div>
                    <span className={`
                            text-2.4rem
                            ${size === 'small' && 'text-[1.6rem]'}
                        `}>{label}</span>
                </div>
            }
        </div>
    </>)
}