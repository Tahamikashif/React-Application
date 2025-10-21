
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import Footer from "./Footer";

const ProductDetail = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(0);

  useEffect(() => {
    console.log("PARAM ID =", id);   // 👈 check karo kya id aa rahi hai
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE =", data);
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product[0].title}</h1>
      <img className="w-[320px] h-[360px]" src={product[0].imagePath} alt={product.title} />
      <p className="italic ml-[350px] mt-[-300px]">Message: {product[0].message}</p>
      <p className="italic  ml-[350px]  mt-[px]">Price: Rs {product.price}</p>
      <p className=" ml-[350px] mt-[px]">Stock:{product[0].stock}</p>
      <p className=" ml-[350px] mt-[px]">Discount:{product[0].dis}</p>
      <p className=" ml-[350px] mt-[-120px]">Name:{product.title}</p>
      <p className="ml-[350px] mt-[100px]">Customer Reveiw:{[...Array(5)].map((_,i) => (

        <IoStarSharp key={i} className="  text-yellow-500 ml-2 inline-block" />
      ))}</p>
       <div className="mt-[250px] ml-[-30px]">
         <Footer />
       </div>
      
    </div>
  );
};

export default ProductDetail;
