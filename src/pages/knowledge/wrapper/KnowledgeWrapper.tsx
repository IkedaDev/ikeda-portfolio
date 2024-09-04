import { useWindowWidth } from "@/hooks/useWindowWidth";
import { DeviceDetector } from "@/utils";
import { KnowledgeDesktop } from "../desktop/KnowledgeDesktop";
import { KnowledgeMobile } from "../mobile/KnowledgeMobile";

export const KnowledgeWrapper: React.FC = () => {
    const windowWidth = useWindowWidth()

    const deviceDetector = new DeviceDetector(windowWidth);
    if( deviceDetector.isMobile() ) return <KnowledgeMobile />
    
    return <KnowledgeDesktop />

}