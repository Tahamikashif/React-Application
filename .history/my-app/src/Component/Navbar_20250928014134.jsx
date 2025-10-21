import React from 'react'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

  return (
    <div className='mt-[25px] ml-[18px]'>
        <div className="w-[60px] rounded-lg flex justify-center item-center h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>Men</p>

        
        </div>
        <div className="w-[80px] rounded-lg flex justify-center item-center ml-[70px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>Women</p>

        </div>
          <div className="w-[80px] rounded-lg flex justify-center item-center ml-[164px]  h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>Children</p>

        </div>
        <div className="w-[80px] rounded-lg flex justify-center item-center ml-[256px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>Brand</p>

        </div>
         <div className="w-[80px] rounded-lg flex justify-center item-center ml-[348px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>New</p>

        </div>
         <div className="w-[80px] rounded-lg flex justify-center item-center ml-[437px] mt-[-30px] h-[30px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>Popular</p>

        </div>
         <div className="w-[400px] rounded-lg flex justify-center item-center text-black ml-[540px] italic mt-[-30px] h-[31px]  italic mt-[10px]">
            <input className='bg-gray-200 w-[400px] p-4 rounded-lg italic ' type="text" placeholder='Search Enter Your product' />
           <IoSearch className='ml-[-27px] flex justify-center text-[18px] item-center mt-[8px]' />
        </div>
        <div className="w-[80px] rounded-lg flex justify-center item-center ml-[964px] mt-[-30px] h-[31px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>About</p>

        </div>
         <div className="w-[80px] rounded-lg flex justify-center item-center ml-[1060px] mt-[-30px] h-[31px] bg-gray-200 italic mt-[10px]">
            <p className='hover:text-gray-500'>FaQs</p>

        </div>
         
      
    </div>
  )
}

export default Navbar
