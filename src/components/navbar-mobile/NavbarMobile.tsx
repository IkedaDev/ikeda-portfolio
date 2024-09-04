import React, { useState } from "react";
import ArrowIcon from '../../assets/images/icons/arrow-01.svg'
import { NavLink } from "react-router-dom";

interface Props{

}

export const NavbarMobile: React.FC<Props> = ({}: Props) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (<>
        <div 
            className={`
                h-[6rem] w-[6rem] relative bg-primary flex justify-center items-center rounded-bl-2xl cursor-pointer z-[51] transition-all duration-500
                ${showMenu ? 'right-[calc(100vw-6rem)]' : 'right-0' }
            `} 
            onClick={() => setShowMenu(!showMenu)}
        >
            <img 
                src={ArrowIcon} 
                alt="Icono navbar" 
                className={`
                        scale-75 transition-all duration-700
                        ${showMenu ? 'rotate-180' : '' }
                    `} 
            />
        </div>
        <nav className={`
                fixed w-[100vw] h-[100vh] bg-primary top-0 px-6 py-6 z-50 transition-[right] duration-500
                ${showMenu ? 'right-0' : '-right-full' }
            `}>
            <ul className={`
                flex w-full h-full gap-y-8 font-bold text-4xl text-white flex-col mt-[20vw] relative
                
                `}>
                    <li className="whitespace-nowrap">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                            isActive ? 'text-primary bg-white px-5 rounded-md' : ''
                        }
                        >Home</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/me"
                            className={({ isActive }) =>
                            isActive ? 'text-primary bg-white px-5 rounded-md' : ''
                        }
                        >Sobre mi</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/knowledge"
                            className={({ isActive }) =>
                            isActive ? 'text-primary bg-white px-5 rounded-md' : ''
                        }
                        >Conocimientos</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/experience"
                            className={({ isActive }) =>
                            isActive ? 'text-primary bg-white px-5 rounded-md' : ''
                        }
                        >Experiencia</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) =>
                            isActive ? 'text-primary bg-white px-5 rounded-md' : ''
                        }
                        >Contacto</NavLink>
                    </li>
                </ul>
        </nav>
    </>)
}