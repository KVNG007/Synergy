import React, { ReactNode } from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

type Props = {
    type: string,
    className?: string,
    children: ReactNode,
    arrowColor?: string,
}

export const ArrowButton:React.FC<Props> = ({ type, className, children, arrowColor}) => {
    return(
        <button className={` ${className} bg-grey text-gray-700 rounded-xl flex flex-row items-center justify-center gap-4`}>
            {children}
            {
                type == 'right'?
                <FaChevronRight color={arrowColor || '#949494'} size={10} /> : ''
            }
        </button>
    )
}