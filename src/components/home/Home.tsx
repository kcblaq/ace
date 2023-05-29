import React, { useState } from 'react'
import Images from '../../images/Images'
import './home.css'
import Modal from '../../utils/modal/Modal'


function Home() {
  const [showModal, setShowModal] = useState(true)
  return (
    <div className={`w-screen bg-opacity-60 flex z-20 flex-col items-center justify-center
             bg-gradient-to-r from-[#9CBCD6] absolute to-blue-100 h-screen main`} onClick={(e) => e.stopPropagation()}
      style={{ backgroundImage: `url(${Images.bg1})`, backgroundSize: 'contain', backgroundPosition: 'right top' }}
    >


      <button onClick={() => setShowModal(!showModal)} className='p-4 rounded-3xl w-[80%] md:w-[30%] border-blue-600 border-2' > Pay Now</button>
      {showModal ? <Modal openmodal={() => setShowModal(true)} closemodal={() => setShowModal(false)} /> : null}

    </div>


  )
}

export default Home