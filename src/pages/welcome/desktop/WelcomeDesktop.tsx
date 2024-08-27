import React from "react";
import { Button } from "../../../components";


export const WelcomeDesktop: React.FC = () => {
    return (
        <>
            <div className="h-screen flex">
                <main className="h-full w-1/2 flex justify-center items-center">
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
                        <Button value="Caminemos!" />
                    </div>
                </main>
                <aside className="bg-secondary w-1/2 h-full relative flex justify-center">
                    <img className="object-contain object-bottom" src="https://i.imgur.com/WAZhVbB.png" alt="" />
                </aside>
            </div>
        </>
    )
}