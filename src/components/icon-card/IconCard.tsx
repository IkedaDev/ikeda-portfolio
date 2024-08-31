import React from "react";
import { ICON_CARD_IMAGE, IconCardProps } from "../../interfaces";

import WHATSAPP from "../../assets/images/icons/whatsapp.svg"

const icons: {[key in ICON_CARD_IMAGE] ?: string} = {
    [ICON_CARD_IMAGE.WHATSAPP] : WHATSAPP,
}

export const IconCard: React.FC<IconCardProps> = ({icon, label}: IconCardProps) => {
    return (<>
        <div>
            <img src={icons[icon]} alt="Icono" />
        </div>
    </>)
}