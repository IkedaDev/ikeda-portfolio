import React, { useEffect, useState } from "react";
import { GrassScene, Sprite } from "@/components/landscapes";
import { Button, StepByStep, Title } from "@/components";
import { data } from "@/data/aboutme.interface";
import { useNavigate } from "react-router-dom";
import { StepProps } from "@/interfaces/components";
import { FARMING, SceneSprite, TREE_SPRITE } from "@/interfaces/landscapes";

export const AboutMeMobile: React.FC = () => {

    const navigate = useNavigate()
    const [ steps, setSteps ] = useState< StepProps[]>( [] )
    const [ aboutMeParagraph, _ ] = useState<string[]>(data)
    const [ aboutMeParagraphSelected, setAboutMeParagraphSelected ] = useState<string>(aboutMeParagraph[0])

    const rigthSprites: SceneSprite[][] = [
        [
            { sprite: <Sprite position={55} component={TREE_SPRITE.THREE_CROWNED} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> }
        ],
        [
            { sprite: <Sprite position={55} component={FARMING.GIRL_SCARECROW} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> }
        ],
        [
            { sprite: <Sprite position={55} component={TREE_SPRITE.CURVED} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> }
        ],
    ]

    const next = () => {
        const currentIndexParagraph = aboutMeParagraph.indexOf(aboutMeParagraphSelected)
        const nextIndexParagraph = aboutMeParagraph[currentIndexParagraph + 1]
        if( nextIndexParagraph ){
            setAboutMeParagraphSelected(()=> nextIndexParagraph)
            return
        }
        navigate('/knowledge')
    }

    useEffect(()=>{
        setSteps(()=> (aboutMeParagraph.map(( paragraph , index)=> ({
            id: `${index}`,
            label: `${index + 1}`,
            selected: paragraph === aboutMeParagraphSelected,
            onClick: () => { 
                setAboutMeParagraphSelected(aboutMeParagraph[index])
            }
        }) )))
    },[aboutMeParagraph, aboutMeParagraphSelected])


    return (<>
        <main className="h-[90vh] flex flex-col justify-center mx-8 sm:mx-16 gap-16 relative z-10">
            {
                steps.length > 1 && (
                    <div className="w-full md:w-3/4 px-8 mx-auto">
                        <StepByStep steps={steps}/>
                    </div>
                )
            }
            <div className="font-bold">
                <Title header="h2">Acerca de mi</Title>
            </div>
            <div className="text-2xl sm:text-3xl leading-10">
            {
                aboutMeParagraphSelected && <p>{aboutMeParagraphSelected}</p>
            }
            </div>
            <div className="w-1/2">
                <Button
                    handlerClick={next}
                >
                    {
                        aboutMeParagraph[aboutMeParagraph.length - 1] === aboutMeParagraphSelected 
                        ? 'Conocimientos'
                        : 'Continuar'
                    }
                </Button>
            </div>
                            
        </main>
        <footer className="w-full absolute bottom-0 left-0">
            <GrassScene sprites={rigthSprites[aboutMeParagraph.indexOf(aboutMeParagraphSelected)] || []}/>
        </footer>
    </>)
}