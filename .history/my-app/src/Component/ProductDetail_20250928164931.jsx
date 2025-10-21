// "use client"
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { id } = useParams(); // 👈 URL se id milti hai
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//  fetch(`http://localhost:5000/products/${id}`)
//       .then((res) => res.json())
    
//       .then((data) => {
        
//          console.log("API RESPONSE ",data)
        
//         setProduct(data)})
//       .catch((err) => console.error(err));
//   }, [id]);

// //   if (!product) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
//       <img
//         src={product?.imagePath}
//         alt={product?.title}
//         className="w-[400px] h-[300px] mb-4 rounded-lg"
//       />
//       <p>{product?.message}</p>
//       <p>Stock: {product?.stock}</p>
//       <p>Price: Rs {product?.price}</p>
//       <p>Discount: {product?.dis}%</p>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("PARAM ID =", id);   // 👈 check karo kya id aa rahi hai
    fetch(`http://localhost:5000/${id}`)
      .then((res) => res.json())
      .then((data) => 
        setProduct(data);
      )
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.imagePath} alt={product.title} />
      <p>{product.message}</p>
      <p>Price: Rs {product.price}</p>
    </div>
  );
};

export default ProductDetail;
