import React from 'react'
import { RiEqualFill } from "react-icons/ri";
import { IoMdHeartHalf } from "react-icons/io";
const Header = () => {
  return (
    <div>
        <div className='w-[1210px] bg-gray-300  h-[30px] relative'>
         <p className='ml-[560px] mt-[18px] italic font-semibold'>bagstore..!</p>
         <div className='ml-[520px] mt-[-27px]'>
          <img className='w-[35px] h-[33px]  rounded-lg' src="pic2.png" alt="pic" />
         </div>


          <div className='mt-[-24px] ml-[20px] text-[22px] bg-gray-400 rounded-2xl w-[22px]'>

          <RiEqualFill />



        </div>
        <div className='mt-[-24px] ml-[900px] text-[22px] bg-gray-400 rounded-2xl w-[22px]'>

          <IoMdHeartHalf />



        </div>
         
        </div>
       
    </div>
  )
}

export default Header
