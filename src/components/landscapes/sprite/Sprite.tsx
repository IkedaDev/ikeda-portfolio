import { FARMING, SPRITE_TYPE, SpriteProps, TREE_SPRITE } from "../../../interfaces/landscapes"

import THREE_CROWNED from "../../../assets/images/sprites/tree-01.png"
import THREE_CURVED from "../../../assets/images/sprites/tree-02.png"
import BARN_01 from "../../../assets/images/sprites/barn-01.png"

const imageSprite: {[key in SPRITE_TYPE] ?: string} = {
    [TREE_SPRITE.THREE_CROWNED] : THREE_CROWNED,
    [TREE_SPRITE.CURVED] : THREE_CURVED,
    [FARMING.BARN_01] : BARN_01,
}

export const Sprite: React.FC<SpriteProps> = (props: SpriteProps) => {
    let leftPosition: string = `${props.position}%`
    if(props.position === 'center') leftPosition = `calc(50% - ${props.size.width.value/ 2}${props.size.width.unit})`

    return (
        <div 
        className="sprite" 
        style={{ 
            '--left': leftPosition,
            '--image': `url(${imageSprite[props.component]})`,
            '--width': `${props.size.width.value}${props.size.width.unit}`,
            '--height': `${props.size.height.value}${props.size.height.unit}`,
            } as React.CSSProperties }>

        </div>
    )
}
