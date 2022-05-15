import React from 'react'

const Searches = () => {
  return (
    <>
<div className='w-[70%] mx-auto mt-11'>
    <div>
        <div className='rounded-md border border-gray-400 w-full h-[10rem]'>
            <h3 className='text-[23px] font-semibold text-gray-700 p-2'>Search for</h3>
            <div className='flex rounded-md border border-gray-400 w-[80%] py-1 mx-4 h-[50px]'>
                <input type='text' placeholder='' className='w-[78%] outline-none h-[40px] px-3' />
                <button className='rounded-full h-[40px] w-[20%] text-white bg-[#4f3fd3b0]'>Search</button>
            </div>
            <div className='flex mt-2 mx-3'>
            <button className='rounded-full h-[40px] w-[20%] text-white bg-[#4f3fd3b0]'>Search</button>
            <button className='rounded-full h-[40px] w-[20%] text-white bg-[#4f3fd3b0] mx-3'>Search</button>
            <button className='rounded-full h-[40px] w-[20%] text-white bg-[#4f3fd3b0]'>Search</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Searches