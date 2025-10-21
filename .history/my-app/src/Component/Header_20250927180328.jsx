import React, { useState } from 'react'
import { RiEqualFill } from "react-icons/ri";
import { IoMdHeartHalf } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open); // toggle true/false
  };

  return (
    <div className='relative'>
      <div className="w-[1210px] bg-gray-300 h-[30px] relative">
        <p className="ml-[560px] mt-[18px] italic font-semibold">bagstore..!</p>
        <div className="ml-[520px] mt-[-27px]">
          <img
            className="w-[35px] h-[33px] rounded-lg"
            src="pic2.png"
            alt="pic"
          />
        </div>

        <div className="mt-[-22px] ml-[20px] text-[22px] flex justify-center item-center bg-gray-400 rounded-2xl w-[22px] ">
          <button onClick={toggle}>
            <RiEqualFill />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: "300px",
          height: "100vh",
          backgroundColor: "#f4f4f4",
          position: "fixed",
          top: 0,
          left: 0,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.7s ease",
          zIndex: 1000,
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        {/* Close Button */}
        <button onClick={toggle}>
          <RxCross2 />
        </button>

        {/* Links */}
        <div className="mt-[30px] text-black border-b-2 gap-4 bg-no-repeat flex-col flex justify-center items-baseline text-left text-[15px] border-amber-300">
         
        <p><link rel="stylesheet" href="/" />All</p> 
        <p><link rel="stylesheet" href="/" /></p>
        <p><link rel="stylesheet" href="/" /></p>
        <p><link rel="stylesheet" href="/" /></p>
        <p><link rel="stylesheet" href="/" /></p>
        <p><link rel="stylesheet" href="/" /></p>
        </div>
      
  



        </div>
        <div className='mt-[-22px] ml-[1000px] absolute  text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

          <IoMdHeartHalf />



        </div>

         <div className='mt-[-22px] ml-[1060px] absolute text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

         <BsFillCartCheckFill />
         



        </div>
        <div className='mt-[-22px] ml-[1120px] absolute text-[20px] flex justify-center item-center bg-gray-400 rounded-3xl w-[24px]'>

         <MdOutlinePersonOutline />



        </div>
         
        </div>
       
 
  )
}

export default Header
