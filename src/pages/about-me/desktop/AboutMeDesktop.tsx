import React from "react";
import { Button, Title } from "../../../components";
import { SceneSprite, TREE_SPRITE } from "../../../interfaces/landscapes";
import { GrassScene, Sprite } from "../../../components/landscapes";
import { useNavigate } from "react-router-dom";

export const AboutMeDesktop: React.FC = () => {
    
    const navigate = useNavigate()
    const handlerClick = () => navigate('/knowledge')

    const rigthSprites: SceneSprite[] = [
        { sprite: <Sprite position={'center'} component={TREE_SPRITE.THREE_CROWNED} size={{height:{value:350,unit:'px'}, width:{ value:200, unit:'px'}}} /> }
    ]

    return (
        <>
            <div className="min-h-screen flex justify-center">
                <div className="fixed bottom-0 left-0 w-1/4">
                    <GrassScene></GrassScene>
                </div>
                <main className="w-1/2 bg-secondary px-20 lg:px-32 xl:px-40 flex flex-col justify-center">
                    <div className="flex flex-col gap-20 mt-36 xl:mt-16">
                        <Title header="h3">Acerca de mi</Title>
                        <div className="text-3xl mb-16 flex flex-col gap-y-8 ">
                            <p>
                                ¡Hola! Soy Sebastián Torrealba y tengo 23 años. Mi viaje en el mundo de la 
                                programación comenzó cuando tenía 16 años. Aunque al principio creaba cosas 
                                que podrían considerarse innecesarias, disfrutaba cada momento y fui, 
                                en su mayoría, autodidacta.
                            </p>
                            <p>
                                A los 18 años, decidí estudiar Ingeniería en Informática, carrera que terminé 
                                a los 22 años. En el tercer año de carrera obtuve mi primer trabajo como programador. 
                                Desde entonces, he seguido desarrollándome como profesional en el campo del desarrollo web.
                            </p>
                            <p>
                                Me considero una persona alegre que siempre busca lo mejor de cada situación. 
                                Me encanta trabajar en equipo y disfrutar del proceso colaborativo. Además, 
                                soy una persona tranquila. Valoro la creatividad y la innovación, y 
                                siempre estoy dispuesto a aprender de los demás.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:mt-16 pb-12">
                        <Button handlerClick={handlerClick}>Conocimientos</Button>
                    </div>
                </main>
                <div className="fixed bottom-0 right-0 w-1/4">
                    <GrassScene sprites={rigthSprites}></GrassScene>
                </div>
            </div>
        </>
    )
}