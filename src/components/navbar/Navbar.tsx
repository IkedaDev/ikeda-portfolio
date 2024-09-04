import React from "react";
import { NavLink } from "react-router-dom"
import './Navbar.css'
import ArrowIcon from '../../assets/images/icons/arrow-01.svg'

interface Props{
    orientation?: 'right' | 'left'
}

export const Navbar: React.FC<Props> = ({ orientation = 'right' }: Props) => {


    return (<>
        <div 
           className={`
                bg-primary w-[7rem] h-[8rem] hover:bg-ike-cyan hover:w-full group relative overflow-hidden transition-all duration-500
                ${orientation == "right" ? 'rounded-br-[30px]' : 'rounded-bl-[30px]'}                
            `}
        >
            <picture className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                <img 
                    className={`
                        w-[30px]
                        ${orientation == "right" && 'rotate-180' }
                        `} 
                    src={ArrowIcon}
                    alt="Icono del Navbar"
                 />
            </picture>
            <nav 
                className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-[500ms] group-hover:delay-200
                `}
            >   
                <ul className="flex w-full h-full justify-center items-center gap-x-8 font-bold text-2xl text-white flex-wrap transition-opacity duration-[1000ms]">
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