import React from 'react'

const Topup = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 ml-[20px] '>
        <div className='w-[400px] h-[500px] bg-gray-800 mt-[20px] ml-[127px] rounded-lg'>
        <img className="w-[400px] h-[500px] rounded-lg"src="pic18.png" alt="" />
        <p className='mt-[-490px] p-2 text-[18px] italic '>Modern Quality and Mind Freshing Colour</p>
        <p className='p-2 mt-[-8px] text-[16px]'>This 25% over Discount..</p>
        </div>
         
        <div className='w-[400px] h-[500px] bg-gray-800 mt-[20px] ml-[33px] rounded-lg'>
        <img className="w-[400px] h-[500px] rounded-lg"src="pic19.png" alt="" />
        </div>
      
    </div>
  )
}

export default Topup
