import React, { useState, useRef } from 'react'
import { IoMdClose } from "react-icons/io"
import { FiEdit2 } from "react-icons/fi"
import { MdVerified } from 'react-icons/md'
import { CgMenuGridO } from "react-icons/cg"
import { BsSim } from 'react-icons/bs'
import { AiOutlineWifi } from 'react-icons/ai'
import Images from '../../images/Images';
import { Col, TransactionDetail } from '../HelperItems';
import { MdOutlineReceiptLong } from 'react-icons/md'
import "./modal.css";
interface Myprops {
    openmodal: () => void;
    closemodal: () => void;
}

function Modal({ openmodal, closemodal }: Myprops) {
    if (!openmodal) return null;

    const inputRefs = Array.from({ length: 4 }).map(() => useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>);
    const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(''));
    const [ccv, setCcv] = useState('')
    const [expiryDate, setExpiryDate] = useState('');
    const [password, setPassword] = useState('');


    const firstInputRef = inputRefs[0];
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value.length === 0 && index > 0) {
            inputRefs[index - 1].current.focus();
        } else if (value.length === 4 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }

        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const ccvInput = <div className='w-full border-2 rounded-lg h-10 items-center flex justify-between p-2 text-black'>
        <input type='text' className='h-full w-2/3 text-right md:pr-6 focus:border-0 focus:outline-none' placeholder='345' value={ccv} onChange={(e) => setCcv(e.target.value)} />
        <CgMenuGridO className='h-full w-1/2 ' />
    </div>

    const expiryDateInput =
        <div className='w-full  rounded-lg h-10 items-center flex justify-between text-black'>
            <input type='text' className=' w-2/5 border-2 p-1 rounded-lg h-10 text-center focus:border-blue-600 focus:outline-blue-500 ' placeholder='09' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <span> / </span>
            <input type='text' className='w-2/5 border-2 p-1 rounded-lg h-10 text-center focus:border-blue-600 focus:outline-blue-500 ' placeholder='24' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>

    const passwordInput =

        <div className='w-full border-2 rounded-lg h-10 items-center flex justify-between p-2 text-black'>
            <input type='password' className='h-full w-2/3 text-center md:pr-6 focus:border-0 focus:outline-none' placeholder='........' value={password} onChange={(e) => setPassword(e.target.value)} />
            <CgMenuGridO className='h-full w-1/2 ' />
        </div>

    const transactions = [
        {
            name: 'Company', description: ` Apple`
        },
        { name: 'Order Number', description: '1266201' },
        { name: 'Product', description: 'MackBook Air' },
        {name: 'VAT(20%)', description: '$100'}
    ]
    const paginate = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div
            className="w-screen fixed bg-opacity-60 bg-gray-900 h-screen flex z-20 flex-col items-center justify-center main"
            onClick={closemodal}
            
        >
            <div
                className="min-h-[500px] md:my-20 w-5/6 sm:w-[500px] md:w-[90%] max-w-[700px] shadow-lg xl:min-w-[500px] xl:my-10 xl:text-2xl p-4 bg-white overflow-y-auto h-full"
                onClick={(e) => e.stopPropagation()}
            >

                <section className="flex flex-col justify-between h-full w-full md:p-3">
                    <div className="flex flex-col md:flex-row text-center justify-center relative mt-2 w-full gap-3 ">


                         {/* first  */}
                        <div className='flex flex-col w-full md:w-2/3 h-full md:mt-0 md:h-[500px] justify-between'>
                           
                            <div className='flex justify-between items-center w-full mb-2'>
                                <div className='flex items-center gap-1 md:gap-2'>
                                    {/* the logo  */}
                                    <div className='h-[30px] w-[30px] bg-[#025FFE] rounded-full relative'>
                                        <div className='absolute bg-white h-1 w-2 top-3 right-3' ></div>
                                        <div className='absolute bg-white h-1 w-2 top-4 right-2' ></div>
                                    </div>

                                    <span className=' font-bold text-lg'> AceCoin<span className='font-light'>Pay</span> </span>
                                </div>
                                <div className='w-1/3 flex justify-end gap-1 '>
                                    {paginate.splice(5).map((item, i) => {
                                        return <div className='bg-black text-white rounded p-1 sm:p-1 text-xs cursor-pointer'> {item} </div>
                                    })}
                                </div>
                            </div>

                            <div className=' flex w-full justify-between text-sm '>
                                <div className='flex flex-col items-start'>
                                    <span className='font-bold text-sm' > Card Number</span>
                                    <small className=' text-gray-500 text-left'> Enter the 16-digit card number on the card </small>
                                </div>
                                <div className='flex text-blue-700 sm:gap-3 items-center cursor-pointer' onClick={() => firstInputRef.current.focus()}>
                                    <FiEdit2 />
                                    Edit
                                </div>
                            </div>

                            <div className=' w-full rounded-lg h-10 border-2 md:mt-4 justify-between flex items-center px-1 md:px-3'>
                                <div className='flex gap-0 md:gap-2 items-center h-full w-full bg-gray-50 '>
                                    <span className=' w-4 md:w-6  pr-1'> <img src={Images.mastercard} alt="Mastercard" /> </span>
                                    {inputRefs.map((ref, index) => (
                                        <>
                                            <input
                                                key={index}
                                                ref={ref}
                                                maxLength={4}
                                                value={inputValues[index]}
                                                onChange={(event) => handleChange(index, event)}
                                                className='w-8 md:w-12  text-sm bg-gray-50'
                                                placeholder='1234'
                                            />
                                            {index < inputRefs.length - 1 && <span className='text-sm'>-</span>}
                                        </>

                                    ))}

                                </div>
                                <span className='text-blue-400 bg-gray-50'><MdVerified /> </span>


                            </div>

                            <Col title='CCV Number' info='Enter the 3 or 4 digit number on the card' textfied={ccvInput} />
                            <Col title='Expiry Date' info='Enter the expiry date of the card ' textfied={expiryDateInput} />
                            <Col title='Password' info='Enter your dynamic password' textfied={passwordInput} />
                            <button className='text-white bg-[#025FFE] p-4 rounded-lg text-sm' > Pay Now</button>

                        </div>
                        {/* the second column */}


                        <div className='flex flex-col items-center w-full md:w-1/3 p-3 relative  h-full md:h-[500px] mt-6 md:mt-0'>


                            <div className='h-[1px] w-full mb-20 flex items-center justify-center'>
                                <div className='bg-[#025FFE] h-4 w-10 shadow-md'></div>
                            </div>

                            <div className='w-3/5 h-52 rounded-lg flex flex-col z-10 bg-opacity-90 absolute shadow-md bg-white justify-center gap-4  px-4 py-6'>
                                <div className=' flex justify-between w-full text-sm h-full mt-4'>
                                    <BsSim />
                                    <AiOutlineWifi />
                                </div>
                                <div className='flex flex-col text-sm items-start '>
                                    <small className='text-xs'> Jonathan Michael</small>
                                    <small className=' font-bold'> &bull;&bull;&bull;&bull;  3456</small>
                                    <div className='flex w-full justify-between mt-2 items-center'>
                                        <small className=''> 09/24</small>
                                        <img src={Images.mastercardfull} alt='mastercard' className='w-8 h-6' />
                                    </div>
                                </div>

                            </div>



                            <div className='h-full w-full bg-gray-200 bg-opacity-80 rounded-lg relative'>
                                <div className='mt-44'>
                                    {
                                        transactions.map((item, i) => {
                                            return (
                                                <TransactionDetail name={ item.name} description={item.description} />
                                            )
                                        })
                                   }
                                </div>
                                
                                <div className='mt-32 py-4 px-10 text-xs flex w-full justify-between items-center'>
                                    <div className='flex flex-col text-xs justify-start items-start gap-1'>
                                        <small className='text-xs font-base'>
                                            You have to Pay
                                        </small>
                                        <small className='font-thin'>
                                            <span className='font-bold text-sm' > 549.<sub> 99</sub></span> USD
                                        </small>
                                    
                                    </div>
                                    <span className=' h-full '> <MdOutlineReceiptLong /></span>
                                </div>

                                {/* //seperator */}
                                <section className='absolute bottom-20 w-full'>
                                    <div className="relative w-full">
                                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-6 rounded-tr-full rounded-br-full bg-white"></span>
                                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 rounded-tl-full rounded-bl-full h-6  bg-white"></span>
                                        <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 border border-dotted border-gray-500 h-0.5"></div>
                                    </div>
                                </section>
                                   

                            </div>
                        </div>


                        <button
                            onClick={closemodal}
                            className="absolute -right-3 -top-3 font-bold"
                        >
                            {" "}
                            <IoMdClose />{" "}
                        </button>
                    </div>

                </section>

                
               
            </div>
        </div>
    );
}

export default Modal