import React, { useState } from "react";
import { Button, DisplayButton, NavbarMobile, Title } from "@/components";
import { GrassScene, Sprite } from "@/components/landscapes";
import { Knowledge } from "@/interfaces";
import { data } from "@/data/knowledge.data";
import { FARMING, SceneSprite } from "@/interfaces/landscapes";
import { useNavigate } from "react-router-dom";

export const KnowledgeMobile: React.FC = () => {

    const navigate = useNavigate()
    const handlerClickExperience = () => navigate('/experience')

    const [knowledges, _] = useState<Knowledge[]>(data)
    const [__, setKnowledgeSelected] = useState<Knowledge | null>(null)

    const sprites: SceneSprite[] = [
        { sprite: <Sprite position={60} component={FARMING.BOY_SCARECROW} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> }
    ]

    const handlerClick = (knowledge: Knowledge) => {
        setKnowledgeSelected(knowledge)
    }    

    return (<>
        <div className="absolute top-0 right-0">
            <NavbarMobile />
        </div>
        <main className="h-[90vh] flex flex-col justify-center mx-8 sm:mx-16 gap-20">
            <div className="font-bold">
                <Title header="h2">Conocimientos</Title>
            </div>
            <div className="flex w-full gap-8 flex-col">
                {
                    knowledges.map((knowledge, index)=> (
                        <DisplayButton 
                            key={index} 
                            {...knowledge.button} 
                            handlerClick={() => handlerClick(knowledge)}
                            selected={true}
                        />
                    ))
                }
            </div>
            <div className="w-1/2">
                <Button handlerClick={handlerClickExperience}>
                    Experiencia
                </Button>
            </div>
                            
        </main>
        <footer className="w-full absolute bottom-0 left-0">
            <GrassScene sprites={sprites}/>
        </footer>
    </>)
}