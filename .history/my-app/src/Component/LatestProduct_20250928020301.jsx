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
      <p></p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {products.map((item,i) => (
              
              <div key={i}>

                <p className=" w-[500px] gap-8"><img className=" w-[600px] h-[300px] gap-8" src={item.imagePath} alt="pics" /></p>

                <p className="">{item.title}</p> 

              </div>
           


            ))}
            

       </div>
    </div>
  )
}

export default LatestProduct
