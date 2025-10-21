// "use client"
// import { useEffect,useState } from "react"
// import React from 'react'

// const LatestProduct = () => {

//    const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/Products") // Backend call
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

    
//   return (
//     <div >
//       <p className="w-[300px] h-[50px] text-blue-900 italic text-[30px] ml-[30px] mt-[30px]"> Latest-Product....</p>
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
//             {products.map((item,i) => (
              
//               <div className="w-[300px] ml-[30px] rounded-lg mt-[20px] h-[450px] hover:scale-105 duration-500 transition-transform bg-gray-300" key={i}>

//                 <p><img className=" w-[320px] h-[300px]  gap-8" src={item.imagePath} alt="pics" /></p>
//                  <div className="italic">
//                 <p className="ml-[5px]">Name:{item.title}</p> 
//                  <p className="ml-[5px]">Desc:{item.message}</p> 
//                   <p className="ml-[5px]">Stock:{item.stock}</p>
//                    <p className="ml-[5px]">Price: Rs {item.price}</p>
//                     <p className="ml-[5px]">dis: {item.dis} %</p>   
//                        </div>
//               </div>
           


//             ))}
            

//        </div>
//     </div>
//   )
// }

// export default LatestProduct

"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


const LatestProduct = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Backend call
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p className="w-[300px] h-[50px] text-blue-900 italic text-[30px] ml-[30px] mt-[30px]">
        Latest-Product....
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => Link(`/product/${item.id}`)} // 👈 navigate on click
            className="w-[300px] ml-[30px] rounded-lg mt-[20px] h-[450px] 
                       hover:scale-105 duration-500 transition-transform 
                       bg-gray-300 cursor-pointer"
          >
            <img
              className="w-[320px] h-[300px] gap-8"
              src={item[0]?.imagePath}
              alt="pics"
            />
            <div className="italic">
              <p className="ml-[5px]">Name: {item[0]?.title}</p>
              <p className="ml-[5px]">Desc: {item[0]?.message}</p>
              <p className="ml-[5px]">Stock: {item[0].stock}</p>
              <p className="ml-[5px]">Price: Rs {item[0].price}</p>
              <p className="ml-[5px]">Dis: {item[0].dis}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
