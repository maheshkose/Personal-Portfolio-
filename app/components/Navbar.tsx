'use client'
import Link from "next/link";
import React, { useState } from "react";
import Changemode from "./myUi/Changemode";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menu, setmenu] = useState<boolean>(false);
  const linkStyle =
    "dark:text-gray-200 text-gray-800 hover:text-orange-500 transition-colors duration-300  dark:hover:text-orange-500 cursor-pointer font-medium text-xl";
  return (
    
    <div className="w-full h-auto bg-white dark:bg-gray-900 fixed top-0 left-0 z-50 shadow-md ">
      <nav className={`w-full h-16 flex ${menu?'items-start': "items-center"} justify-around  text-lg font-medium text-black dark:text-gray-200 lg:px-20`}>
        <Link href="/Pages/Home">
          <h1 className="font-bold text-2xl text-orange-500  hover:text-orange-200 transition-colors duration-300 ">
            Mahesh
          </h1> 
        </Link>
        {/* <Link href="/Pages">Pages</Link> */}
        <div className="w-full flex flex-col items-center justify-end gap-1 mt-0">
          <div className="block lg:hidden" onClick={()=>{setmenu(prev=>prev?false:true)}}>
              <IoMenu size={50}/>
          </div>
          <div className={`${menu ? "flex flex-col lg:flex-row justify-start lg:justify-around gap-1 rounded-md p-4 bg-gray-100 ":'hidden'} lg:flex items-center justify-around lg:gap-8  dark:bg-gray-900`} onClick={()=>{setmenu(false)}}>

             <Link className={linkStyle} href="/Pages/Skills">
              Skills
            </Link>
            <Link className={linkStyle} href="/Pages/Projects" >
              Projects
            </Link>
            <Link className={linkStyle} href="/Pages/Education">
              Education
            </Link>
           
            <Link className={linkStyle} href="/Pages/ShareFeedback">
              Share Feedback
            </Link>
          </div>
        </div>
        <div>
          <Changemode />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
