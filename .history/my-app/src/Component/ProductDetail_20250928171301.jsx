
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState("");

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
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img className="w-[320px] h-[360px]" src={product.imagePath} alt={product.title} />
      <p>{product.message}</p>
      <p cl>Price: Rs {product.price}</p>
    </div>
  );
};

export default ProductDetail;
