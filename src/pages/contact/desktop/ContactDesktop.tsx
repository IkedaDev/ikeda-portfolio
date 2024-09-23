import { Title,IconCard, DisplayButton, Button, Navbar  } from "@/components"
import { GrassScene, Sprite } from "@/components/landscapes"
import { ICON_CARD_IMAGE } from "@/interfaces/components"
import { FARMING, SceneSprite } from "@/interfaces/landscapes"

export const ContactDesktop: React.FC = () => {

    const sprites: SceneSprite[] = [
        { sprite: <Sprite position={15} component={FARMING.GIRL_SCARECROW} size={{height:{value:300,unit:'px'}, width:{ value:150, unit:'px'}}} /> },
        { sprite: <Sprite position={65} component={FARMING.BOY_SCARECROW} size={{height:{value:300,unit:'px'}, width:{ value:150, unit:'px'}}} /> },
    ]

    return (
        <>
            <div className="h-screen flex">
                <div className="h-full w-1/2 bg-secondary flex flex-col justify-center gap-20 md:px-24 lg:px-32 xl:px-40">
                    <Title header="h3">Contacto</Title>
                    <div className="flex gap-14 flex-col">
                        <div className="flex gap-8 flex-col">
                            <IconCard icon={ICON_CARD_IMAGE.WHATSAPP} label="+56 9 8909 5115" /> 
                            <IconCard icon={ICON_CARD_IMAGE.GMAIL} label="sebaaignacio111@gmail.com" /> 
                        </div>
                        <DisplayButton label="Mas Opciones" selected={true} iconOrientation="bottom"/>
                        <div className="flex gap-8 flex-wrap">
                            <IconCard icon={ICON_CARD_IMAGE.DISCORD} />
                            <IconCard icon={ICON_CARD_IMAGE.INSTAGRAM} />
                            <IconCard icon={ICON_CARD_IMAGE.TIKTOK} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Button>Descargar CV</Button>
                    </div>
                </div>
                <div className="h-full w-1/2  ">
                    <Navbar />
                    <div className="flex flex-col justify-center h-[70vh] items-center text-3xl leading-[3rem] md:px-24 lg:px-32 xl:px-40 relative z-10">
                        <p className="font-bold text-[6rem] text-red-900">Anette</p>
                    </div>
                    <div className="fixed bottom-0 right-0 w-1/2">
                        <GrassScene  sprites={sprites}/>
                    </div>
                </div>
            </div>
        </>
    )
}