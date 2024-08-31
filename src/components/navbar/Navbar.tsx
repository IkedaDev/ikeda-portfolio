import React from "react";
import { NavLink } from "react-router-dom"
import './Navbar.css'
import ArrowIcon from '../../assets/images/icons/arrow-01.svg'

interface Props{

}

export const Navbar: React.FC<Props> = ({}: Props) => {

    return (<>
        <div className="bg-primary w-[7rem] h-[8rem] rounded-br-[30px] hover:w-full hover:bg-ike-cyan group transition-all duration-300">
        {/* <div className="bg-primary h-[8rem] rounded-br-[30px] w-full group transition-all duration-300"> */}
            <picture className="relative w-full h-full flex items-center justify-center group-hover:hidden">
                <img className="rotate-180 w-[30px]" src={ArrowIcon} alt="Icono del Navbar" />
            </picture>
            <nav className="hidden h-full w-full group-hover:flex ">   
            {/* <nav className="flex h-full w-full">    */}
                <ul className="navbar flex h-full w-full gap-8 items-center justify-center text-white font-bold text-3xl overflow-x-auto ">
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/"
                            className={({ isActive }) =>
                            isActive ? 'text-ike-cyan bg-white px-5 rounded-md' : ''
                        }
                        >Home</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/me"
                            className={({ isActive }) =>
                            isActive ? 'text-ike-cyan bg-white px-5 rounded-md' : ''
                        }
                        >Sobre mi</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/knowledge"
                            className={({ isActive }) =>
                            isActive ? 'text-ike-cyan bg-white px-5 rounded-md' : ''
                        }
                        >Conocimientos</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/experience"
                            className={({ isActive }) =>
                            isActive ? 'text-ike-cyan bg-white px-5 rounded-md' : ''
                        }
                        >Experiencia</NavLink>
                    </li>
                    <li className="whitespace-nowrap">
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) =>
                            isActive ? 'text-ike-cyan bg-white px-5 rounded-md' : ''
                        }
                        >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>)
}