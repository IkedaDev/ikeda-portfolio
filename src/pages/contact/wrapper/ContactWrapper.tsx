import { useWindowWidth } from "@/hooks/useWindowWidth";
import { DeviceDetector } from "@/utils";
import { ContactDesktop } from "../desktop/ContactDesktop";
import { ContactMobile } from "../mobile/ContactMobile";


export const ContactWrapper: React.FC = () => {
    const windowWidth = useWindowWidth()

    const deviceDetector = new DeviceDetector(windowWidth);
    if( deviceDetector.isMobile() ) return <ContactMobile />
    
    return <ContactDesktop />

}