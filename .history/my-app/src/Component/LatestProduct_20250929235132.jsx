

"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { GiPaperBagFolded } from "react-icons/gi";


const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const [selected,setSelected] = useState("")


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
       {products.slice(1,17).map((item) => (
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
   <div className="relative w-[1210px] h-[300px] bg-gray-400 mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 ">

   <div className="w-[200px] h-[85px] pt-[20px]">
    <img className="w-[200px] h-[85px] object-center rounded-3xl ml-[30px] hover:scale-105 duration-500" src="pic4.png" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[20px]">
    <img className="w-[200px] h-[85px] object-center  rounded-lg ml-[50px] hover:scale-105 duration-500" src="pic5.png" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[20px]">
    <img className="w-[200px] h-[85px] object-center  rounded-lg ml-[50px] hover:scale-105 duration-500" src="pic6.png" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[20px] ml-[-20px]">
    <img className="w-[210px] h-[85px]  rounded-2xl ml-[50px] hover:scale-105 duration-500 " src="pic7.jpg" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[20px] ml-[-20px]">
    <img className="w-[210px] h-[85px]  rounded-2xl ml-[75px] hover:scale-105 duration-500 " src="pic8.png" alt="" />

   </div>

   <div className="w-[200px] h-[85px] pt-[20px] ml-[-20px]">
    <img className="w-[210px] h-[85px]  rounded-2xl ml-[75px] hover:scale-105 duration-500 " src="pic9.png" alt="" />

   </div>


     

   </div>



     <div>

     
  <ul className=" grid sm:grid-cols-2 md:grid-cols-3 mt-[20px] ml-[80px] italic text-[25px]">
        <li>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="option"
              value="New Collection"
              checked={selected === "New Collection"}
              onChange={(e) => setSelected(e.target.value)}
            />
            New Collection
          </label>
        </li>

        <li>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="option"
              value="Start Collection"
              checked={selected === "Start Collection"}
              onChange={(e) => setSelected(e.target.value)}
            />
            Start Collection
          </label>
        </li>

        <li>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="option"
              value="Popular Collection"
              checked={selected === "Popular Collection"}
              onChange={(e) => setSelected(e.target.value)}
            />
            Popular Collection
          </label>
        </li>
      </ul>

      <p className="mt-[20px] text-[19px] font-thin ml-[20px]">
        Selected: <span className="font-bold">{selected}</span>
      </p>
    </div>

    <div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-[20px]">
       {products.slice(17,23).map((item) => (
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

    </div>

    <div>

        <div className="ml-[480px] justify-center items-center mt-[35px] text-[30px] italic text-gray-600">
        <p>We Supported By</p>
   </div>

     <div className="grid sm:grid-cols-">

      <div className="w-[200px] h-[130px] bg-gray-200 rounded-lg ">
        <div className="text-[32px] flex justify-center items-center ml-[-10px] pt-[10px]">
       <GiPaperBagFolded  />
          </div>
       <p className="ml-[30px] mt-[10px] text-[19px]">Express Delivery</p>
        <p className="ml-[25px] mt-[px] text-[11px]">DHL express delivery worldwide</p>
          <p className="ml-[33px] mt-[px] text-[10px]">From our bag company</p>

      </div>


     <div>
      <div className="w-[200px] h-[130px] bg-gray-200 rounded-lg ">
        <div className="text-[32px] flex justify-center items-center ml-[-10px] pt-[10px]">
       <GiPaperBagFolded  />
          </div>
       <p className="ml-[30px] mt-[10px] text-[19px]">Express Delivery</p>
        <p className="ml-[25px] mt-[px] text-[11px]">DHL express delivery worldwide</p>
          <p className="ml-[33px] mt-[px] text-[10px]">From our bag company</p>

      </div>



     </div>


     





    </div>



     </div>
     </div>


   
  );
};

export default LatestProduct;
