'use client';
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { TooltipSides } from "@/app/components/myUi/Tooltip";

const page = () => {
  const [copied, setCopied] = useState(false);
  const socialLinksstyle =
    "w-16 h-16 bg-gray-800 border-gray-100 border-2 rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-600 transition-colors duration-300 hover:border-gray-300 cursor-pointer dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:border-gray-300";
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-3 font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 px-5 lg:px-20 py-30">
      <h3 className="text-orange-400 text-2xl font-bold ">
        MERN Stack Developer updated
      </h3>
      <h1 className="text-gray-800 dark:text-gray-50 text-5xl lg:text-7xl font-bold my-6 text-nowrap">
        Mahesh Kose
      </h1>
      <p className="w-full lg:w-250 flex items-center justify-center text-xl text-base/60 text-center">
        MERN stack developer with a knack for crafting dynamic web applications.
        Skilled in MongoDB, Express.js, React, and Node.js, I thrive on turning
        ideas into seamless digital experiences. With a strong foundation in
        both front-end and back-end development, I am dedicated to creating
        efficient and user-friendly solutions that make an impact.
      </p>
      <div className="flex items-center justify-center gap-6 p-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md mr-4 cursor-pointer hover:scale-125 hover:bg-blue-600 transition-transform duration-300">
          <Link href="/Pages/Projects" passHref>
            View My Work
          </Link>
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 rounded-md cursor-pointer hover:scale-125 hover:bg-gray-600 transition-transform duration-300">
          <a href="/resume.pdf" download={'Myresume.pdf'}>Resume</a>
        </button>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        <TooltipSides text="LinkedIn">
          <div className={socialLinksstyle}>
            <a href="https://www.linkedin.com/in/maheshkose" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </TooltipSides>
        <TooltipSides text="GitHub">
          <div className={socialLinksstyle}>
            <a href="https://github.com/maheshkose" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </TooltipSides>
        <TooltipSides text="maheshkose23@gmail.com">
          <div className={socialLinksstyle + " flex-col gap-1 relative"} onClick={()=>{navigator.clipboard.writeText("maheshkose23@gmail.com");setCopied(true);setTimeout(()=>setCopied(false),1000)}}>
          
            <CgMail />
            {copied && <span className="text-sm text-gray-100 bg-gray-800 dark:text-gray-800 dark:bg-gray-50 absolute -right-10 -bottom-5 py-1 px-2 rounded-2xl">Gmail copied</span>}
          {/* <span className="text-sm text-gray-800 dark:text-gray-100 absolute -top-5 ">maheshkose23@gmail.com</span> */}
        </div>
        </TooltipSides>
        <TooltipSides text="Instagram">
          <div className={socialLinksstyle}>
          <a href="https://www.instagram.com/ms2kose" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
        </div>
        </TooltipSides>
      </div>
      
    </div>
    
  );
};

export default page;
