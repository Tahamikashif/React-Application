import React from 'react'

const Navbar = () => {

  return (
    <div className='mt-[25px] ml-[18px]'>
        <div className="w-[60px] rounded-lg flex justify-center item-center h-[30px] bg-gray-200 italic mt-[10px]">
            <p>Men</p>

        
        </div>
        <div className="w-[80px] rounded-lg flex justify-center item-center ml-[70px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p>Women</p>

        </div>
          <div className="w-[80px] rounded-lg flex justify-center item-center ml-[164px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p>Children</p>

        </div>
        <div className="w-[80px] rounded-lg flex justify-center item-center ml-[256px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p>Brand</p>

        </div>
         <div className="w-[80px] rounded-lg flex justify-center item-center ml-[348px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p>New</p>

        </div>
         <div className="w-[80px] rounded-lg flex justify-center item-center ml-[437px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p>Popular</p>

        </div>
         <div className="w-[400px] rounded-lg flex justify-center item-center ml-[px] mt-[-30px] h-[30px] bg-gray-400 italic mt-[10px]">
            <input className='bg-gray-200 w-[400px] p-4' type="text" placeholder='Search Enter Your product' />

        </div>
        
         
      
    </div>
  )
}

export default Navbar
