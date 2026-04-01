'use client'
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
     const [copied, setCopied] = useState(false);
     const socialLinksstyle =
    "w-12 h-12 bg-gray-800 border-gray-100 border-2 rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-600 transition-colors duration-300 hover:border-gray-300 cursor-pointer dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:border-gray-300";
  return (
    <div className='w-full h-auto bg-[#eee] dark:bg-gray-800 text-white text-lg flex flex-col justify-between px-10 lg:px-20 py-10'>
        <div className='w-full flex flex-col lg:flex-row justify-between pb-20'>
            <div>
                <h1 className='text-yellow-500 text-3xl font-extrabold py-5'>Mahesh Kose</h1>
                <p className='text-gray-500'>MERN Stack Developer ,<br />focused on crafting clean, scalable web applications.</p>
            </div>
            <div>
                <h1 className='text-yellow-500 text-2xl font-extrabold py-5'>Connect</h1>
                <div className="flex items-center justify-center gap-6 ">
                        <div className={socialLinksstyle}>
                          <a href="https://www.linkedin.com/in/maheshkose" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                          </a>
                          
                        </div>
                        <div className={socialLinksstyle}>
                          <a href="https://github.com/maheshkose" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                          </a>
                        </div>
                        <div className={socialLinksstyle + " flex-col gap-1 relative"} onClick={()=>{navigator.clipboard.writeText("maheshkose23@gmail.com");setCopied(true);setTimeout(()=>setCopied(false),1000)}}>
                          
                            <CgMail />
                            {copied && <span className="text-sm text-gray-100 bg-gray-800 dark:text-gray-800 dark:bg-gray-50 absolute -right-10 -bottom-5 py-1 px-2 rounded-2xl">Gmail copied</span>}
                          {/* <span className="text-sm text-gray-800 dark:text-gray-100 absolute -top-5 ">maheshkose23@gmail.com</span> */}
                        </div>
                        <div className={socialLinksstyle}>
                          <a href="https://www.instagram.com/ms2kose" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare />
                          </a>
                        </div>
                      </div>
            </div>
        </div>
        <div className=' dark:bg-gray-800 py-5 text-center text-gray-600 dark:text-gray-400/30 border-t border-gray-300/50 dark:border-t-2 dark:border-gray-900'>
            © 2026 Mahesh Kose. All rights reserved.
        </div>
    </div>
  )
}

export default Footer