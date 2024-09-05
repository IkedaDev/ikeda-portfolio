import { Button, IconCard, Title } from "@/components";
import { GrassScene, Sprite } from "@/components/landscapes";
import { ICON_CARD_IMAGE } from "@/interfaces/components";
import { FARMING, SceneSprite } from "@/interfaces/landscapes";
import React from "react";

export const ContactMobile: React.FC = () => {
    
    const sprites: SceneSprite[] = [
        { sprite: <Sprite position={45} component={FARMING.GIRL_SCARECROW} size={{height:{value:150,unit:'px'}, width:{ value:100, unit:'px'}}} /> },
    ]

    return (<>
        <main className="h-[90vh] flex flex-col justify-center gap-16 mx-8 sm:mx-16">
            <div className="text-6xl font-bold">
                <Title header="h2">Contacto</Title>
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-8">
                        <IconCard icon={ICON_CARD_IMAGE.WHATSAPP} label="+56 9 8909 5115" size="small"/> 
                        <IconCard icon={ICON_CARD_IMAGE.GMAIL} label="sebaaignacio111@gmail.com" size="small"/> 
                    </div> 
                </div>
                {/* <div>
                    <DisplayButton label="Ver Más" selected />
                </div>
                <div>
                    <div className="flex flex-wrap gap-8">
                        <IconCard icon={ICON_CARD_IMAGE.DISCORD} size="small"/> 
                        <IconCard icon={ICON_CARD_IMAGE.INSTAGRAM} size="small"/> 
                        <IconCard icon={ICON_CARD_IMAGE.TIKTOK} size="small"/> 
                    </div> 
                </div> */}
            </div>  
            <div className="w-auto">
                <Button>
                    Descargar CV
                </Button>
            </div>
        </main>
        <footer className="w-full absolute bottom-0 left-0">
            <GrassScene sprites={sprites}/>
        </footer>
    </>)
}