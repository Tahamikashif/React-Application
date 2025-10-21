import React from 'react'

const Footer = () => {

  return (
    <div className='w-[1190px] h-[400px] bg-gray-300 rounded-xl mt-[30px] leading-tight italic'>
        <p className='p-4 text-[19px]'>SUBSCRIBE TO OUR NEWSLITER</p>
         <p className='p-4 mt-[-33px] text-[19px]'>AND TO BE FIRST NOW ABOUT</p>
          <p className='p-4 mt-[-33px] text-[19px]'>THE LATEST RELEASES, OFFER AND</p>
            <p className='p-4 mt-[-33px] text-[19px]'>NEWS,FROM BAGSTORE.COM</p>

            <div className='w-[300px] h-[50px] rounded-lg bg-blue-400 mx-[12px] mt-[40px]'>

              <input className='w-[300px] h-[50px] rounded-lg' type="text" placeholder='Enter your email' />


            </div>
    </div>
  )
}

export default Footer
