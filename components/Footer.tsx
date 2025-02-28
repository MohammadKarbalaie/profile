import React from "react";
import { BiHome } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center 
      w-full md:w-10/12 md:-pl-10 lg:w-4/4 xl:w-full border-t
    border-b border-teal-500 py-6">
      <p className="flex items-center justify-start w-full 
        py-2 px-4 text-sm md:text-base lg:text-lg font-light">
        <BiHome className="mr-2" />
        Tehran, Iran
      </p>
      <p className="flex items-center justify-start w-full 
        py-2 px-4 text-sm md:text-base lg:text-lg font-light">
        <IoCall className="mr-2" />
        +989035373250
      </p>
      <p className="flex items-center justify-start w-full 
        py-2 px-4 text-sm md:text-base lg:text-lg font-light">
        <MdEmail className="mr-2" />
        mamadkarmalaie@gmail.com
      </p>
    </div>
  );
}

export default Footer;

