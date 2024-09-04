import React from "react";
import { DeviceDetector } from "@/utils";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { WelcomeMobile } from "../mobile/WelcomeMobile";
import { WelcomeDesktop } from "../desktop/WelcomeDesktop";


export const WelcomeWrapper: React.FC = () => {
    const windowWidth = useWindowWidth()

    const deviceDetector = new DeviceDetector(windowWidth);
    if( deviceDetector.isMobile() ) return <WelcomeMobile />
    
    return <WelcomeDesktop />

}