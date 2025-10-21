

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
  <Link 
    key={item.id} 
    to={`/product/${item.id}`} 
    className="w-[300px] ml-[30px] rounded-lg mt-[20px] h-[450px] 
               hover:scale-105 duration-500 transition-transform 
               bg-gray-300 cursor-pointer block"
  >
    <img 
      className="w-[320px] h-[300px] rounded-t-lg" 
      src={item.imagePath} 
      alt={item.title} 
    />
    <div className="italic p-2">
      <p>Name: {item.title}</p>
      <p>Desc: {item.message}</p>
      <p>Stock: {item.stock}</p>
      <p>Price: Rs {item.price}</p>
      <p>Dis: {item.dis} %</p>
    </div>
  </Link>
))}
      </div>


      <div className="ml-[480px] justify-center items-center mt-[20px] text-[30px] italic text-gray-600">
        <p>We Supported By</p>
   </div>
   <div className="relative w-[1210px] h-[300px] bg-gray-600 mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 ">

   <div className="w-[200px] h-[85px] pt-[10px]">
    <img className="w-[200px] h-[85px] object-center rounded-lg ml-[30px] hover:scale-105 duration-500" src="pic4.png" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[10px]">
    <img className="w-[200px] h-[85px] object-center  rounded-lg ml-[20px] hover:scale-105 duration-500" src="pic5.png" alt="" />

   </div>


   </div>




    </div>
  );
};

export default LatestProduct;
