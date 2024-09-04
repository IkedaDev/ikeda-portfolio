import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrassScene, Sprite } from "@/components/landscapes";
import { SceneSprite, TREE_SPRITE } from "@/interfaces/landscapes";
import { Button, DisplayButton, Navbar, Title } from "@/components";
import { Experience } from "@/interfaces";
import moment from "moment";
import { data } from "@/data/experience.data";

export const ExperienceDesktop: React.FC = () => {

    const navigate = useNavigate()
    const handlerClickContact = () => navigate('/contact')

    const sprite: SceneSprite[] = [
        { sprite: <Sprite position={70} component={TREE_SPRITE.CURVED} size={{height:{value:300,unit:'px'}, width:{ value:150, unit:'px'}}} /> }
    ]

    const [experiences, _] = useState<Experience[]>(data)
    const [ experienceSelected, setExperienceSelected ] = useState<Experience | null>(null)

    useEffect(()=>{
        setExperienceSelected(experiences[0])
    }, [])

    const handlerClick = (experience: Experience) => {
        setExperienceSelected(experience)
    }

    return (
        <>
            <div className="h-screen flex">
                <div className="h-full w-1/2 bg-secondary flex flex-col justify-center gap-20 md:px-24 lg:px-32 xl:px-40">
                    <Title header="h3">Experiencia</Title>
                    <div className="flex w-full gap-8 flex-col">
                        {
                            experiences.map((props, index)=> (
                                <DisplayButton 
                                    key={index} 
                                    label={props.button.label} 
                                    selected={ experienceSelected?.id === props.id } 
                                    handlerClick={() => handlerClick(props)}
                                />
                            ))
                        }
                    </div>
                    <div className="w-1/2">
                        <Button handlerClick={handlerClickContact} >Contacto</Button>
                    </div>
                </div>
                <div className="h-full w-1/2  ">
                    <Navbar />
                    <div className="flex flex-col justify-start mt-12 h-[70vh] items-center text-3xl leading-[3rem] md:px-24 lg:px-32 xl:px-40 relative z-10">
                        { experienceSelected && (<>
                                { experienceSelected.period.show && (
                                    <p className="flex gap-16 mb-8">
                                        <span className="bg-primary text-white px-4 rounded-md ">{moment(experienceSelected.period.start).format('MM / YYYY')}</span>
                                        <span className="bg-primary text-white px-4 rounded-md ">{moment(experienceSelected.period.end).format('MM / YYYY')}</span>
                                    </p> 
                                )} 
                                
                                <div 
                                    className="h-[70%] overflow-auto"
                                    dangerouslySetInnerHTML={{ __html: experienceSelected.information }}
                                ></div>
                            </>)
                        }
                    </div>
                    <div className="fixed bottom-0 right-0 w-1/2">
                        <GrassScene sprites={sprite} />
                    </div>
                </div>
            </div>
        </>
    )
}