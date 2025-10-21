

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import Footer from "./Footer";
import { useCart } from "../Cartcontext";

const ProductDetail = () => {
  const { addToCart } = useCart();  // ✅ Correct way
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img className="w-[320px] h-[360px]" src={product.imagePath} alt={product.title} />
      
      <div className="ml-[350px] mt-[-300px]">
        <p className="italic">Message: {product.message}</p>
        <p className="italic">Price: Rs {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Discount: {product.dis}</p>
        <p>Name: {product.title}</p>
        <p className="mt-[10px]">Customer Review:
          {[...Array(5)].map((_, i) => (
            <IoStarSharp key={i} className="text-yellow-500 ml-2 inline-block" />
          ))}
        </p>
      </div>

      <div className="ml-[350px] mt-[0px]">
        <h2>{product.title}</h2>
        <p>Rs {product.price}</p>
        <button
          onClick={() => addToCart(product)}  // ✅ fixed
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
       <div className="bg-red-600 text-black rounded-lg">
          {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}

       </div>

             


        </button>
      </div>

      <div className="mt-[190px] ml-[-30px]">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
