
export enum ICON_CARD_IMAGE{
    WHATSAPP = "ICON_CARD_WHATSAPP",
    GMAIL = "ICON_CARD_GMAIL",
    DISCORD = "ICON_CARD_DISCORD",
    INSTAGRAM = "ICON_CARD_INSTAGRAM",
    TIKTOK = "ICON_CARD_TIKTOK",
}

export interface IconCardProps{
    icon: ICON_CARD_IMAGE,
    label?: string,
    size?: 'small' | 'normal'
}