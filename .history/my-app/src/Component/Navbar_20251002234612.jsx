import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

   const [searchTerm,setsearchterm] = React.useState("");
   const [showSuggestion,setShowSuggestion] = useState(false)


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
          onChange={(e) => {setse}}
        />
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
