import { ReactNode } from "react";

interface ColProps {
    title: string;
    info: string;
    textfied: ReactNode
}

export const Col = ({title, info, textfied }: ColProps) => {
    return (
        <div className=' flex w-full justify-between text-sm my-4'>
            <div className='flex flex-col items-start'>
                <span className='font-bold text-sm' >{title} </span>
                <small className=' text-gray-500 text-left'> {info} </small>
            </div>
            <div className='flex text-blue-700 gap-3 items-center w-1/2 h-full'>

                {textfied}
            </div>
        </div>
    )
}