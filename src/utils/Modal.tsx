import React, { useState, useRef } from 'react'
import { IoMdClose } from "react-icons/io"
import { FiEdit2 } from "react-icons/fi"
import { MdVerified } from 'react-icons/md'
import { CgMenuGridO } from "react-icons/cg"
import Images from '../images/Images';
import { Col } from './HelperItems';
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
        <CgMenuGridO className='h-full w-1/2 '/>
   </div>

    const expiryDateInput = 
        <div className='w-full  rounded-lg h-10 items-center flex justify-between text-black'>
            <input type='text' className=' w-2/5 border-2 p-1 rounded-lg h-10 text-center ' placeholder='09' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <span> / </span>
            <input type='text' className='w-2/5 border-2 p-1 rounded-lg h-10 text-center ' placeholder='24' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
    
    const passwordInput = 

        <div className='w-full border-2 rounded-lg h-10 items-center flex justify-between p-2 text-black'>
            <input type='password' className='h-full w-2/3 text-center md:pr-6 focus:border-0 focus:outline-none' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
            <CgMenuGridO className='h-full w-1/2 ' />
        </div>

    return (
        <div
            className="w-screen fixed bg-opacity-60 bg-gray-900 h-screen flex z-20 flex-col items-center justify-center"
            onClick={closemodal}
        >
            <div
                className="min-h-[400px] h-[500px] my-20  w-5/6 sm:w-[500px] md:h-[500px] md:w-[80%] max-w-[1000px] shadow-lg xl:min-h-[350px] xl:min-w-[500px] xl:my-10 xl:text-2xl p-4  bg-white fixed overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >

                <section className="flex flex-col justify-between h-full w-full md:p-3">
                    <div className="flex flex-col md:flex-row text-center justify-center relative h-full w-full ">
                        <div className='flex flex-col h-full w-full md:w-2/3 '>
                            <div className='flex justify-between items-center w-full mb-2'>
                                <div className='flex items-center gap-1 md:gap-2'>
                                    <div className='h-[30px] w-[30px] bg-[#025FFE] rounded-full relative'>
                                        <div className='absolute bg-white h-1 w-2 top-3 right-3' ></div>
                                        <div className='absolute bg-white h-1 w-2 top-4 right-2' ></div>
                                    </div>

                                    <span className=' font-bold text-lg'> AceCoin<span className='font-light'>Pay</span> </span>
                                </div>
                                <h3> paginate</h3>
                            </div>

                            <div className=' flex w-full justify-between text-sm '>
                                <div className='flex flex-col items-start'>
                                    <span className='font-bold text-sm' > Card Number</span>
                                    <small className=' text-gray-500 text-left'> Enter the 16-digit card number on the card </small>
                                </div>
                                <div className='flex text-blue-700 gap-3 items-center cursor-pointer' onClick={() => firstInputRef.current.focus()}>
                                    <FiEdit2 />
                                    Edit
                                </div>
                            </div>

                            <div className=' w-full rounded-lg h-10 border-2 md:mt-4 justify-between flex items-center px-1 md:px-3'>
                                <div className='flex gap-0 md:gap-4 items-center h-full w-full bg-gray-50 '>
                                    <span className=' w-4 md:w-10  pr-1'> <img src={Images.mastercard} alt="Mastercard" /> </span>
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
                        <div className='flex flex-col w-full md:w-1/3 border-2 overflow-auto p-3'>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam deserunt fugit enim ipsum sunt necessitatibus, aliquid architecto omnis amet earum vitae quia natus qui nesciunt! Tempora possimus quas necessitatibus enim exercitationem sapiente, iste, optio consectetur, ullam excepturi labore ipsa odio nisi consequatur molestias rerum sed at. Earum tempora odio, doloribus voluptatem autem fugit placeat provident omnis beatae eveniet suscipit! Quam cupiditate aliquam perspiciatis harum tempore impedit sequi doloremque quaerat ducimus porro libero, iure at eius eum, ea maiores adipisci, magnam reprehenderit labore vel optio esse! Commodi deserunt, error excepturi sunt a tenetur dicta atque id aperiam impedit, fugit ipsum temporibus earum optio necessitatibus recusandae animi! Dolores temporibus ducimus, numquam saepe minima magnam sint corrupti reiciendis repellat tempore illum unde tempora eos, laboriosam, ipsa voluptatibus esse ex. Enim cupiditate error deserunt officiis ex at, consectetur fugit ad iste numquam aut voluptatibus, doloremque, nobis consequatur rem fugiat tempore nihil cumque velit minus voluptas aspernatur labore sed! Necessitatibus numquam iure, neque nulla veritatis explicabo? Molestias unde, veniam magnam atque architecto ipsum voluptatem sint doloribus, laborum sequi dicta totam odio ipsam ullam consectetur iure repellendus? Sit perferendis deserunt quas repellendus, dolorum officiis a quibusdam unde ex eligendi voluptatibus recusandae esse fuga cupiditate dolorem nisi qui quasi sint, commodi iste? Nam a itaque quaerat id praesentium vero quasi iusto consectetur. Neque deserunt nulla atque, iusto reprehenderit quibusdam, ducimus mollitia odio expedita distinctio ut earum asperiores, esse modi! Hic vero corporis sit blanditiis quia, voluptatem, officia voluptas aliquid quisquam, inventore vel. Explicabo autem enim deserunt pariatur consequatur ad veniam animi tempore sint facilis, voluptate voluptatem illo nihil nam molestiae nulla cum debitis corporis laborum ex unde! Ex corporis veritatis ipsam incidunt quod! Adipisci cum explicabo tenetur, autem rerum, omnis commodi ipsa fugit, dolorum aliquam voluptatem quia error voluptas voluptates excepturi corrupti provident magni. Praesentium, possimus totam.</p>
                        </div>
                        <button
                            onClick={closemodal}
                            className="absolute right-0 -top-2 font-bold"
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