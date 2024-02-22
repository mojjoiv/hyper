import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Logo from '../app/logo.svg';
import ArrowIcon from '../app/Arrow.png';
import Image from "next/image";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" className="h-10" />
          <FiMenu className="text-green-500 ml-4" />
          <div className="ml-2 text-green-500">카테고리</div>
        </div>

        <div className="w-full sm:w-[300px] md:w-[30%] relative flex items-center mx-4 mb-4 md:mb-0">
          <BsSearch className="mr-2 text-gray-400" size={20} />
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="사면 좋을지 고민 중이라면"
          />
        </div>

        <span className="flex items-center text-gray-900 text-[12px] gap-1 flex items-center md:ml-auto">
          <Image src={ArrowIcon} alt="Arrow Icon" className="w-5 h-5 mr-1" />
          <span>|</span>
          <span className="cursor-pointer">Login</span>
          <span>/</span>
          <span className="cursor-pointer">Registration</span>
        </span>
      </div>
    </div>
  );
};

export default HeaderMain;
