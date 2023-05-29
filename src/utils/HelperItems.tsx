import { ReactNode } from "react";

interface ColProps {
    title: string;
    info: string;
    textfied: ReactNode
}

interface TransProps {
    name: string,
    description: string
}
export const Col = ({title, info, textfied }: ColProps) => {
    return (
        <div className=' flex w-full justify-between text-sm my-2'>
            <div className='flex flex-col items-start'>
                <span className='font-bold text-sm' >{title} </span>
                <small className=' text-gray-500 text-left'> {info} </small>
            </div>
            <div className='flex text-blue-700 gap-3 items-center w-1/3 h-full'>

                {textfied}
            </div>
        </div>
    )
}


export const TransactionDetail = ({name, description}: TransProps) => {
    return (
        <div className="flex px-8 justify-between w-full text-xs">
            <small className=''> {name} </small>
            <small className=' font-bold'> {description} </small>
        </div>
    )
}