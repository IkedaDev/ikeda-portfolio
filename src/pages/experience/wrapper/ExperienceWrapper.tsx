import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { DeviceDetector } from "../../../utils";
import { ExperienceDesktop } from "../desktop/ExperienceDesktop";
import { ExperienceMobile } from "../mobile/ExperienceMobile";

export const ExperienceWrapper: React.FC = () => {
    const windowWidth = useWindowWidth()

    const deviceDetector = new DeviceDetector(windowWidth);
    if( deviceDetector.isMobile() ) return <ExperienceMobile />
    
    return <ExperienceDesktop />

}