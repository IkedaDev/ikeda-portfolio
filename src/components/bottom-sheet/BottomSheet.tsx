import Icon from "@/assets/images/icons/arrow-01.svg"
import { useEffect, useRef } from "react";
import "./BottomSheet.css"

interface Props{
    title: string
    children: React.ReactNode,
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomSheet: React.FC<Props> = ({children, title, open, setOpen}:Props) => {
    
    const sheetRef = useRef<HTMLDivElement>(null);
    
    const toggleOpen = () => setOpen(!open);

    const handleClickOutside = (event: MouseEvent) => {
        if (sheetRef.current && sheetRef.current.contains(event.target as Node)) return
        setOpen(false);
        
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (<>
        <div 
            ref={sheetRef}
            className={` BottomSheet
                fixed bg-primary w-[100vw] p-8 rounded-t-[2.5rem] max-h-[85vh] transition-all duration-300 z-40
                ${open ? 'bottom-0' : '-bottom-full'}
            `}
        >
            <div className="flex justify-end mb-2">
                <img src={Icon} alt="Close" className="scale-75 -rotate-90 cursor-pointer" onClick={toggleOpen} />
            </div>
            <div className="flex flex-col gap-8 text-white h-full">
                <h6 className="font-bold text-2.4rem">{title}</h6>
                <div className="text-2rem max-h-[calc(85vh-150px)] overflow-y-auto ">
                    {children}
                </div>
            </div>
        </div>
    </>)
}