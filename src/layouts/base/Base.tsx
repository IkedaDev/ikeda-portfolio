import { NavbarMobile } from '@/components';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { DeviceDetector } from '@/utils';
import * as React from 'react'
import { Outlet } from 'react-router-dom'

const Base :React.FC = () => {
    const windowWidth = useWindowWidth()
    const deviceDetector = new DeviceDetector(windowWidth);

    if( deviceDetector.isMobile() ) return (<>
        <div className="absolute top-0 right-0">
            <NavbarMobile />
        </div>
        <Outlet />
    </>)
    
    return <Outlet />
}

export default Base