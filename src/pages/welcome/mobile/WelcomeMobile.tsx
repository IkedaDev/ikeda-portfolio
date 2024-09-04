import React from "react";
import { GrassScene } from "@/components/landscapes";
import { Button, NavbarMobile } from "@/components";
import { useNavigate } from "react-router-dom";

export const WelcomeMobile: React.FC = () => {

    const navigate = useNavigate()
    const handlerClick = () => navigate('/me')

    return (<>
        <main className="h-[90vh] flex flex-col justify-center mx-8 sm:mx-16">
            <div className="absolute top-0 right-0">
                <NavbarMobile />
            </div>
            <div className="text-6xl font-bold">
                <p className="">Hola!</p>
                <p>Soy <span className="ike-text-stroke text-ike-yellow">Sebastian</span></p>
            </div>
            <p className="text-2xl sm:text-3xl mt-4">Ingeniero informatico | Desarrollador de software</p>
            <p className="text-2xl sm:text-3xl my-12"> 
                Hola, soy Sebastián Torrealba. Tengo 23 años y mi profesión es desarrollador de software, 
                a lo cual me he dedicado durante casi 3 años. A lo largo de este tiempo, he tenido la oportunidad 
                de trabajar en diversos proyectos que han enriquecido mi experiencia y habilidades en el ámbito de la programación.
            </p>
            <div className="w-1/2">
                <Button handlerClick={handlerClick}>
                    Caminemos!
                </Button>
            </div>
                            
        </main>
        <footer className="w-full absolute bottom-0 left-0">
            <GrassScene />
        </footer>
    </> )
}