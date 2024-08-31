import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrassScene, Sprite } from "../../../components/landscapes";
import { SceneSprite, TREE_SPRITE } from "../../../interfaces/landscapes";
import { Button, DisplayButton, Title } from "../../../components";
import { data } from "../data";
import { Experience } from "../../../interfaces";

export const ExperienceDesktop: React.FC = () => {

    const navigate = useNavigate()
    const handlerClickContact = () => navigate('/experience')

    const sprite: SceneSprite[] = [
        { sprite: <Sprite position={70} component={TREE_SPRITE.CURVED} size={{height:{value:300,unit:'px'}, width:{ value:150, unit:'px'}}} /> }
    ]

    const [experiences, setExperiences] = useState<Experience[]>(data)
    const [ experienceSelected, setExperienceSelected ] = useState<Experience | null>(null)

    const handlerClick = (index: number) => {
        
        setExperiences(prevButtons =>
            prevButtons.map((experience, i) => ({
                ...experience,
                button:{
                    ...experience.button,
                    selected: i === index
                }
            }))
        );
        
    }

    return (
        <>
            <div className="h-screen flex">
                <div className="h-full w-1/2 bg-secondary flex flex-col justify-center gap-20 md:px-24 lg:px-32 xl:px-40">
                    <Title header="h3">Experiencia</Title>
                    <div className="flex w-full gap-8 flex-col">
                        {
                            experiences.map((props, index)=> (
                                <DisplayButton key={index} {...props.button} handlerClick={() => handlerClick(index)}/>
                            ))
                        }
                    </div>
                    <div>
                        <Button handlerClick={handlerClickContact} >Contacto</Button>
                    </div>
                </div>
                <div className="h-full w-1/2  ">
                    <div className="flex flex-col justify-center h-[70vh] items-center text-3xl leading-[3rem] md:px-24 lg:px-32 xl:px-40 ">
                        {
                            experiences.find((exp) => exp.button.selected && exp.period.show )?.period.start.toDateString() || ''
                        }
                        <div 
                            className="h-[70%] overflow-auto "
                            dangerouslySetInnerHTML={{ __html: experiences.find(({ button }) => button.selected)?.text || "" }}
                        ></div>
                    </div>
                    <div className="fixed bottom-0 right-0 w-1/2">
                        <GrassScene sprites={sprite} />
                    </div>
                </div>
            </div>
        </>
    )
}