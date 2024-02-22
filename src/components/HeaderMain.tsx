import React from "react";

import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart, FiMenu } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from '../app/logo.svg'
import Image from "next/image";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
        <Image src={Logo} alt="Logo" className="h-10" />
        </div>

        <div className="flex items-center">
            <FiMenu className="text-green-500" />
            <div className="ml-2 text-green-500">카테고리</div>
          </div>
        <div className="w-full sm:w-[300px] md:w-[30%] relative">

        <BsSearch
            className="absolute left-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="사면 좋을지 고민 중이라면"
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
