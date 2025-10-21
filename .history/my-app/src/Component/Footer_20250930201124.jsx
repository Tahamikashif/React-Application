import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {

  return (
    <div id='f' className='w-[1120px] h-[400px] mb-8 ml-[40px] rounded-xl mt-[30px] leading-tight italic'>
        <p className='p-4 text-[19px]'>SUBSCRIBE TO OUR NEWSLITER</p>
         <p className='p-4 mt-[-33px] text-[19px]'>AND TO BE FIRST NOW ABOUT</p>
          <p className='p-4 mt-[-33px] text-[19px]'>THE LATEST RELEASES, OFFER AND</p>
            <p className='p-4 mt-[-33px] text-[19px]'>NEWS,FROM BAGSTORE.COM</p>

            <div className='w-[300px] h-[50px] rounded-lg bg-blue-400 mx-[12px] mt-[40px]'>

              <input className='w-[300px] h-[50px] border-2 border-gray-400 rounded-lg p-2' type="text" placeholder='Enter your email' />
                <FaArrowRightLong className='ml-[270px] mt-[-30px]' />

            </div>
            <select>

                <input type="radio" name="h" id="" />

              


            </select>
    </div>
  )
}

export default Footer
