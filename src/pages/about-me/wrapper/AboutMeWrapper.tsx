import { useWindowWidth } from "@/hooks/useWindowWidth";
import { DeviceDetector } from "@/utils";
import { AboutMeDesktop } from "../desktop/AboutMeDesktop";
import { AboutMeMobile } from "../mobile/AboutMeMobile";


export const AboutMeWrapper: React.FC = () => {
    const windowWidth = useWindowWidth()

    const deviceDetector = new DeviceDetector(windowWidth);
    if( deviceDetector.isMobile() ) return <AboutMeMobile />
    
    return <AboutMeDesktop />

}