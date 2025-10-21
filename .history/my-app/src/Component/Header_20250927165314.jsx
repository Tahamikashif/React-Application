import React from 'react'
import { RiEqualFill } from "react-icons/ri";
const Header = () => {
  return (
    <div>
        <div className='w-[1210px] bg-gray-300  h-[30px] relative'>
         <p className='ml-[560px] mt-[18px] italic font-semibold'>bagstore..!</p>
         <div className='ml-[520px] mt-[-27px]'>
          <img className='w-[35px] h-[33px]  rounded-lg' src="pic2.png" alt="pic" />
         </div>


          <div className='mt-[-24px] ml-[20px] text-[20px] bg-green-300 rounded-lg w-[40px]'>

          <RiEqualFill />



        </div>
         
        </div>
       
    </div>
  )
}

export default Header
