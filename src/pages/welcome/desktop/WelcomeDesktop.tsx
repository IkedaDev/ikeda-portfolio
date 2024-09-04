import React from "react";
import { Button, Navbar } from "@/components";
import { useNavigate } from "react-router-dom";
import { SceneSprite } from "@/interfaces/landscapes";
import { GrassScene } from "@/components/landscapes";


export const WelcomeDesktop: React.FC = () => {
    
    const navigate = useNavigate()
    const handlerClick = () => navigate('/me')

    const sprites: SceneSprite[] = []

    return (
        <>
            <div className="h-screen flex">
                <main className="h-full w-1/2 flex justify-start flex-col">
                    <div className="flex justify-end">
                        <Navbar orientation="left"/>
                    </div>
                    <div className=" mt-24 flex ml-24 overflow-auto max-h-[60vh]">
                        <div className="absolute bottom-0 left-0 w-[100vw]">
                            <GrassScene sprites={sprites}></GrassScene>
                        </div>
                        <div className="w-3/4">
                            <div className="text-7xl font-bold">
                                <p className="">Hola!</p>
                                <p>Soy <span className="ike-text-stroke text-ike-yellow">Sebastian</span></p>
                            </div>
                            <p className="text-4xl text-2.4rem mt-4">Ingeniero informatico | Desarrollador de software</p>
                            <p className="text-2rem my-12"> 
                                Hola, soy Sebastián Torrealba. Tengo 23 años y mi profesión es desarrollador de software, 
                                a lo cual me he dedicado durante casi 3 años. A lo largo de este tiempo, he tenido la oportunidad 
                                de trabajar en diversos proyectos que han enriquecido mi experiencia y habilidades en el ámbito de la programación.
                            </p>
                            <div className="w-1/2">
                                <Button handlerClick={handlerClick} >
                                    Caminemos!
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
                <aside className="bg-secondary w-1/2 h-full relative flex justify-center">
                    <img className="object-contain object-bottom" src="https://i.imgur.com/WAZhVbB.png" alt="" />
                </aside>
            </div>
        </>
    )
}