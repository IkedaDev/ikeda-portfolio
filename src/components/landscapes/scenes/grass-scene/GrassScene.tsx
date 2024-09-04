import { SceneSprite } from "@/interfaces/landscapes"


interface Props{
    sprites?: SceneSprite[]
}

export const GrassScene: React.FC<Props> = ({sprites = []}: Props) => {
    return( 
        <>
           <div>
            <div className="relative">
                        {
                            sprites.map( ( obj,index ) => (
                                <div key={index} id={`sprite-${index}`}>
                                    {obj.sprite}
                                </div>
                            ))
                        }
                </div>
                <div className="relative z-[-10] select-none">
                    <div className="grass-image-bg" ></div>
                    <div className="ground-image-bg" ></div>
                </div>
           </div>
        </>
    )
}