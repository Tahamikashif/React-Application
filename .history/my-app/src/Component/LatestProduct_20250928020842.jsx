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
    <div >
      <p className="w-[300px] h-[50px] text-blue-900 italic text-[30px] ml-[30px] mt-[30px]"> Latest-Product....</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {products.map((item,i) => (
              
              <div className="w-[300px] ml-[30px] h-[500px] hover:scale-105 duration-500 transition- bg-gray-500" key={i}>

                <p><img className=" w-[320px] h-[300px]  gap-8" src={item.imagePath} alt="pics" /></p>

                <p className="">{item.title}</p> 

              </div>
           


            ))}
            

       </div>
    </div>
  )
}

export default LatestProduct
