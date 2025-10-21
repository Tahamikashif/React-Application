import React, { useState } from 'react'
import { RiEqualFill } from "react-icons/ri";
import { IoMdHeartHalf } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
const Header = () => {

  const [open,setOpen] = useState("")

  const toggle = () => {
  
    if(!open){
      setOpen(open)
    }


  }


  return (
    <div>
        <div className='w-[1210px] bg-gray-300  h-[30px] relative'>
         <p className='ml-[560px] mt-[18px] italic font-semibold'>bagstore..!</p>
         <div className='ml-[520px] mt-[-27px]'>
          <img className='w-[35px] h-[33px]  rounded-lg' src="pic2.png" alt="pic" />
         </div>


          <div className='mt-[-24px] ml-[20px] text-[22px] bg-gray-400 rounded-2xl w-[22px]'>

          <RiEqualFill />

          <button onClick={to}>






          </button>



        </div>
        <div className='mt-[-22px] ml-[1000px] text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

          <IoMdHeartHalf />



        </div>

         <div className='mt-[-20px] ml-[1060px] text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

         <BsFillCartCheckFill />
         



        </div>
        <div className='mt-[-20px] ml-[1120px] text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

         <MdOutlinePersonOutline />



        </div>
         
        </div>
       
    </div>
  )
}

export default Header
