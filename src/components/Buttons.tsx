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
        <button className={` ${className} font-Roboto font-semibold text-gray-500 rounded-xl flex flex-row items-center justify-center gap-4`}>
            {children}
            {
                type == 'right'?
                <FaChevronRight color={arrowColor || '#949494'} size={12} /> : ''
            }
        </button>
    )
}