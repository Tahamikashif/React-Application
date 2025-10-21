"use client"
import { useEffect,useState } from "react"
import React from 'react'

const LatestProduct = () => {

   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products") // Backend call
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

    
  return (
    <div className='w-[300px] h-[50px] text-blue-900 italic text-[30px] ml-[10px] mt-[30px]'>
       Latest-Product....
       <div>
            {products.map((item,index) => (
              
              <div><
           


            ))}
            

       </div>
    </div>
  )
}

export default LatestProduct
