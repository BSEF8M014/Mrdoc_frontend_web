import React from 'react'
import doc from '../Assets/doc.png'
import phar from '../Assets/phar.png'
import lab from '../Assets/lab.png'

const Header = () => {
  return (
    <div>
        <div className='flex justify-center w-[70%] mx-auto mt-8'>
            <div className='card-shadow flex  w-[35%] h-auto mx-3 cursor-pointer bg-[#4f3fd3b0]   rounded-md'>
                <img src={doc} alt='doc img' className='h-[15rem]' />
                <h1 className='text-white font-bold text-[23px] flex items-center'>Doctor Appointments</h1>
            </div>
            <div className='card-shadow w-[25%]    bg-[#bc379fad]  rounded-md'>
            <h1 className='text-white font-bold text-[23px] flex justify-center  mt-4'>Pharmacies</h1>
            <img src={phar} alt='doc img' className='mt-16' />
               
            </div>
            <div className=' card-shadow w-[35%] mx-3  flex items-center px-3 bg-[#bc9937ad]   rounded-md'>
            <h1 className='text-white font-bold text-[23px] flex justify-center   '>Laboratories</h1>
            <img src={lab} alt='doc img' className='h-[10rem]' />
            </div>
        </div>
    </div>
  )
}

export default Header