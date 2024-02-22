import React from "react";

import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
      <AiOutlineHome className="mr-2 text-gray-400" size={20}/>
        
        <div className="relative">
        <BsSearch className="mr-2 text-gray-400" size={20} />
        </div>

        <IoMenuOutline className="mr-2 text-gray-400" size={20}/>

        <div className="relative">
          <FiHeart className="mr-2 text-gray-400" size={20}/>
        </div>

        <BiUser className="mr-2 text-gray-400" size={20}/>
      </div>
    </div>
  );
};

export default MobNavbar;
