import React, { useState } from "react";
import { Button, Navbar, Title } from "@/components";
import { SceneSprite, TREE_SPRITE } from "@/interfaces/landscapes";
import { GrassScene, Sprite } from "@/components/landscapes";
import { useNavigate } from "react-router-dom";
import { data } from "@/data/aboutme.interface";

export const AboutMeDesktop: React.FC = () => {

    const [ aboutMeParagraph, _ ] = useState<string[]>(data)
    
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
                <main className="w-1/2 bg-secondary flex flex-col justify-start ">
                    <Navbar />
                    <div className="flex flex-col gap-20 mt-20 xl:mt-16 px-20 lg:px-32 xl:px-40">
                        <Title header="h3">Acerca de mi</Title>
                        <div className="text-3xl mb-16 flex flex-col gap-y-8 ">
                            {
                                aboutMeParagraph.map( (p, i) => <p key={i}>{p}</p> )
                            }
                        </div>
                    </div>
                    <div className="lg:mt-16 mb-12 w-1/2 mx-auto">
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