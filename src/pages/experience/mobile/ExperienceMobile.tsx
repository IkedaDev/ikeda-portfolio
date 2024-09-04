import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SceneSprite, TREE_SPRITE } from "../../../interfaces/landscapes";
import { GrassScene, Sprite } from "../../../components/landscapes";
import { Experience } from "../../../interfaces";
import { data } from "../../../data/experience.data";
import { Button, DisplayButton, NavbarMobile, Title } from "../../../components";

export const ExperienceMobile: React.FC = () => {

    const navigate = useNavigate()
    const handlerClickContact = () => navigate('/contact')

    const sprites: SceneSprite[] = [
        { sprite: <Sprite position={70} component={TREE_SPRITE.TWO_PINES} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> }
    ]

    const [experiences, _] = useState<Experience[]>(data)
    const [ experienceSelected, setExperienceSelected ] = useState<Experience | null>(null)

    useEffect(()=>{
        setExperienceSelected(experiences[0])
    }, [])

    const handlerClick = (experience: Experience) => {
        setExperienceSelected(experience)
    }
    
    return (<>
        <div className="absolute top-0 right-0">
            <NavbarMobile />
        </div>
        <main className="h-[90vh] flex flex-col justify-center mx-8 sm:mx-16 gap-20">
            <div className="font-bold">
                <Title header="h2">Experiencia</Title>
            </div>
            <div className="flex w-full gap-8 flex-col">
                {
                    experiences.map((experience, index)=> (
                        <DisplayButton 
                            key={index} 
                            {...experience.button} 
                            handlerClick={() => handlerClick(experience)}
                            selected={true}
                        />
                    ))
                }
            </div>
            <div className="w-1/2">
                <Button handlerClick={handlerClickContact}>
                    Experiencia
                </Button>
            </div>
                            
        </main>
        <footer className="w-full absolute bottom-0 left-0">
            <GrassScene sprites={sprites}/>
        </footer>
    </>)
}