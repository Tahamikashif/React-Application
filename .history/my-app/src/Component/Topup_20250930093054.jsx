import React from 'react'
import { motion } from 'framer-motion'

const Topup = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 ml-[20px]  '>
        <div className='w-[400px] h-[500px]  mt-[20px] ml-[127px] rounded-lg'>
        <motion.img
        src="pic18.png"
        alt="bag"
        className="w-[400px] h-[500px] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 100 }}     // 👈 start hidden + neeche
        whileInView={{ opacity: 5, y: 0 }}   // 👈 scroll karne pe show
        transition={{ duration: 0.6 }}       // 👈 speed
      />
        <p className='mt-[-490px] p-2 text-[18px] italic '>Modern Quality and Mind Freshing Colour</p>
        <motion.h1
        className="mt-[-490px] p-2 text-[18px] italic"
        initial={{ opacity: 0, y: -50 }}     // 👈 upar se hidden
        whileInView={{ opacity: 1, y: 0 }}   // 👈 scroll karte hi niche se smooth
        transition={{ duration: 0.8 }}
      >
       Modern Quality and Mind Freshing Colour
      </motion.h1>
        <p className='p-2 mt-[-11px] text-[16px] italic'>This 25% over Discount..</p>
        </div>
         
        <div className='w-[400px] h-[500px]  mt-[20px] ml-[33px] rounded-lg'>
        <motion.img
        src="pic19.png"
        alt="bag"
        className="w-[400px] h-[500px] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 100 }}     // 👈 start hidden + neeche
        whileInView={{ opacity: 5, y: 0 }}   // 👈 scroll karne pe show
        transition={{ duration: 0.6 }}       // 👈 speed
      />
        </div>
      
    </div>
  )
}

export default Topup
