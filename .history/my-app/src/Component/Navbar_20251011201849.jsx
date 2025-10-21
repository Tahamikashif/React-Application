import React, { useState ,useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { IoStarSharp } from "react-icons/io5";
 
const Navbar = () => {

   const [searchTerm,setsearchterm] = React.useState("");
   const [showSuggestion,setShowSuggestion] = useState(Boolean)
   const [products,setProducts] = useState([])




    useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data)
    };

    fetchProducts();

  }, []);



const FilterProduct = products.filter((product) => 

product?.title.toLowerCase().includes(searchTerm.toLowerCase())


)





  return (
    <div className="mt-[25px] ml-[18px] flex items-center gap-4">
      
      <div className="w-[60px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">Men</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">Women</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">Children</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">Brand</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">New</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic">
        <p className="hover:text-gray-500">Popular</p>
      </div>

      {/* Search Box */}
      <div className="flex items-center bg-gray-200 rounded-lg px-2 w-[400px]">
        <input
          className="bg-transparent flex-1 p-2 outline-none italic"
          type="text"
          placeholder="Search Enter Your product"
          value={searchTerm}
          onChange={(e) => {setsearchterm(e.target.value);setShowSuggestion(true)}}
          onFocus={() => {

              if (searchTerm.trim())  setShowSuggestion(true);
                
          }}
        />

        
               {showSuggestion && searchTerm.trim() !== "" && (
               

<div className="absolute z-50 w-[550px] ml-[350px] max-h-[400px] overflow-y-auto bg-white shadow-lg rounded-lg mt-2 left-0">
  
                          {FilterProduct.length > 0 ? (
                            FilterProduct.map((item) => (
                            
                              <Link
                                to={`/products/${it.id}`}
                                key={val.id}
                                onClick={() => {
                                  setsearchterm(val.title);
                                  setShowSuggestion(false);
                              
                                }}
                              >
                                <div className="flex p-3 border-b hover:bg-gray-100 cursor-pointer">
                                  <img
                                    src={val.imagePath}
                                    width={50}
                                    height={50}
                                    alt="Product"
                                    className="rounded mr-4"
                                  />
                                  <div>
                                    <p className="font-semibold text-black">{val.title}</p>
                                    <p className="text-sm text-gray-500">Rs: {val.price}</p>
                                  </div>
                               
                                </div>

                                
                              </Link>
                                          
                            ))
                          ) : (
                            <p className="text-center p-4 text-gray-500">
                              No matching products found.
                            </p>
                          
                          )}



               </div>
               



               )}

              
                
        <IoSearch className="text-[18px]" />
        
      </div>



      <div className="w-[80px] rounded-lg flex justify-center items-center h-[31px] bg-gray-200 italic">
        <p className="hover:text-gray-500">About</p>
      </div>

      <div className="w-[80px] rounded-lg flex justify-center items-center h-[31px] bg-gray-200 italic">
        <p className="hover:text-gray-500">FaQs</p>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { IoSearch } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSuggestion, setShowSuggestion] = useState(false);
//   const [products, setProducts] = useState([]);
//   const location = useLocation();

//   // ✅ Fetch all products once when component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // ✅ Hide dropdown when page route changes
//   useEffect(() => {
//     setShowSuggestion(false);
//     setSearchTerm("");
//   }, [location]);

//   // ✅ Filter search results
//   const filteredProducts = products.filter((product) =>
//     product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="mt-[25px] ml-[18px] flex items-center gap-4 relative flex-wrap">
//       {/* Nav Tabs */}
//       {["Men", "Women", "Children", "Brand", "New", "Popular", "About", "FAQs"].map(
//         (tab, i) => (
//           <div
//             key={i}
//             className="w-[80px] rounded-lg flex justify-center items-center h-[30px] bg-gray-200 italic hover:bg-gray-300 cursor-pointer"
//           >
//             <p className="hover:text-gray-600">{tab}</p>
//           </div>
//         )
//       )}

//       {/* 🔍 Search Bar */}
//       <div className="flex items-center bg-gray-200 rounded-lg px-2 w-[400px] relative">
//         <input
//           className="bg-transparent flex-1 p-2 outline-none italic"
//           type="text"
//           placeholder="Search product..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setShowSuggestion(true);
//           }}
//           onFocus={() => {
//             if (searchTerm.trim()) setShowSuggestion(true);
//           }}
//         />

//         <IoSearch className="text-[18px] text-gray-700" />

//         {/* 🔽 Search Suggestions Dropdown */}
//         {showSuggestion && searchTerm.trim() !== "" && (
//           <div className="absolute top-[42px] left-0 z-50 w-[400px] max-h-[400px] overflow-y-auto bg-white shadow-lg rounded-lg">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((val) => (
//                 <Link
//                   to={`/products/${val._id || val.id}`} // ✅ support both MongoDB or SQL IDs
//                   key={val._id || val.id}
//                   onClick={() => {
//                     setSearchTerm("");
//                     setShowSuggestion(false);
//                   }}
//                 >
//                   <div className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer">
//                     <img
//                       src={val.imagePath}
//                       width={50}
//                       height={50}
//                       alt="Product"
//                       className="rounded mr-4"
//                     />
//                     <div>
//                       <p className="font-semibold text-black">{val.title}</p>
//                       <p className="text-sm text-gray-500">Rs: {val.price}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <p className="text-center p-4 text-gray-500">
//                 No matching products found.
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
