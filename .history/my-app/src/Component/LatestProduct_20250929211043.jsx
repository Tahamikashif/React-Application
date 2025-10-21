

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


      <div className="ml-[470px] justify-center items-center">
        <p>We Supported By</p>
   </div>




    </div>
  );
};

export default LatestProduct;
