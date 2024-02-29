"use client";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Logo from '../app/logo.svg';
import ArrowIcon from '../app/Arrow.png';
import Image from "next/image";

const HeaderMain = () => {
  
  return (
    // <div className="border-b border-gray-200 py-2 ms-8">
    <div className="border-b container w-full border-gray-200 
                    justify-between items-center 
                    ml-8 flex flex-col md:flex-row mr-16 mt-2">
      {/* <div className="container mx-auto px-4 sm:px-8 mt-4
                      flex flex-col md:flex-row 
                      justify-between items-center" dir="ltr"> */}
        <div className="flex items-center mb-4 md:mb-0 ml-32 mt-4 " >
          <Image src={Logo} alt="Logo" className="h-10" />
          <FiMenu className="text-green-500 ml-4" />
          <div className="ml-2 text-green-500">카테고리</div>
        </div>

        <div className="relative mr-48 ">
           <div className="absolute  inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
               <svg className="w-3 h-3 text-xl text-gray-500" 
                    fill="currentColor" viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                   <path fillRule="evenodd" 
                         d="M8 4a4 4 0 100 8 4 4 0 
                              000-8zM2 8a6 6 0 1110.89 
                              3.476l4.817 4.817a1 1 0 01-1.414 
                              1.414l-4.816-4.816A6 6 0 012 8z" 
                         clipRule="evenodd"></path>
                </svg>
           </div>
            <input type="text" 
                   id="input-group-1" 
                   className=" border border-gray-300 
                                text-gray-900 text-sm rounded 
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full ps-10 p-2.5  dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" 
                     placeholder="구매할지 말지 고민 중이라면"/>
          </div>


        <span className="flex items-center text-black text-[12px] gap-1 md:ml-0 mr-48">
          <Image src={ArrowIcon} alt="Arrow Icon" className="font-bold w-8 h-6 mr-1" />
          <span className="text-gray-300">|</span>
          <span className="font-bold cursor-pointer">로그인</span>
          <span className="font-bold">/</span>
          <span className="font-bold cursor-pointer">회원가입</span>
        </span>
      </div>
    // </div>
  );
};

export default HeaderMain;
