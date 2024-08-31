
export type SPRITE_TYPE = TREE_SPRITE | FARMING

export enum TREE_SPRITE{
    THREE_CROWNED = "THREE_CROWNED_SPRITE",
    CURVED = "THREE_CURVED_SPRITE",
} 

export enum FARMING{
    BARN_01 = "FARMING_BARN_01",
}

export interface SpriteProps{
    position: number | 'center',
    component: SPRITE_TYPE,
    size:{
        width:{
            value: number,
            unit: 'px'
        },
        height:{
            value: number,
            unit: 'px'
        },
    }
}