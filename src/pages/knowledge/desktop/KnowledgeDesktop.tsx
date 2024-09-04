import React, { useEffect, useState } from "react";
import { Title, DisplayButton, Button, Navbar } from "../../../components";
import { GrassScene, Sprite } from "../../../components/landscapes";
import { FARMING, SceneSprite } from "../../../interfaces/landscapes";

import { useNavigate } from "react-router-dom";
import { Knowledge } from "../../../interfaces";
import { data } from "../../../data/knowledge.data";

export const KnowledgeDesktop: React.FC = () => {

    const navigate = useNavigate()
    const handlerClickExperience = () => navigate('/experience')

    const sprite: SceneSprite[] = [
        { sprite: <Sprite position={55} component={FARMING.BARN_01} size={{height:{value:350,unit:'px'}, width:{ value:200, unit:'px'}}} /> }
    ]

    const [knowledges, _] = useState<Knowledge[]>(data)
    const [knowledgeSelected, setKnowledgeSelected] = useState<Knowledge | null>(null)

    useEffect(()=>{
        setKnowledgeSelected(knowledges[0])
    }, [])

    const handlerClick = (knowledge: Knowledge) => {
        setKnowledgeSelected(knowledge)
    }    

    return (<>
        <div className="h-screen flex">
            <main className="h-full w-1/2 bg-secondary flex flex-col justify-center gap-20 md:px-24 lg:px-32 xl:px-40">
                <Title header="h3">Conocimientos</Title>
                <div className="flex w-full gap-8 flex-col">
                    {
                        knowledges.map((knowledge, index)=> (
                            <DisplayButton 
                                key={index} 
                                {...knowledge.button} 
                                handlerClick={() => handlerClick(knowledge)}
                                selected={ knowledgeSelected?.id === knowledge.id } 
                                />
                        ))
                    }
                </div>
                <div className="w-1/2">
                    <Button handlerClick={handlerClickExperience} >Experiencia</Button>
                </div>
            </main>
            <aside className="w-1/2">
                <Navbar />
                {
                    knowledgeSelected &&
                    <div 
                        className="flex flex-col justify-center items-center h-[70vh] text-3xl leading-[3rem] md:px-24 lg:px-32 xl:px-40 "
                        dangerouslySetInnerHTML={{ __html: knowledgeSelected.information }}
                    >
                    </div>
                }
                <div className="fixed bottom-0 right-0 w-1/2">
                    <GrassScene sprites={sprite} />
                </div>
            </aside>
        </div>
    </>)
}