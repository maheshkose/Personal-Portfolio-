import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
const page = () => {
    const socialLinksstyle = 'w-16 h-16 bg-gray-800 border-gray-100 border-2 rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-600 transition-colors duration-300 hover:border-gray-300 cursor-pointer dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:border-gray-300';
  return (
    <div>
        <h3>MERN Stack Developer</h3>
        <h1>Mahesh Kose</h1>
        <p>Passionate MERN stack developer with a knack for crafting dynamic web applications. Skilled in MongoDB, Express.js, React, and Node.js, I thrive on turning ideas into seamless digital experiences. With a strong foundation in both front-end and back-end development, I am dedicated to creating efficient and user-friendly solutions that make an impact.</p>
        <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-4'>View My Work</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-md'>Resume</button>
        </div>
        <div className='flex items-center justify-center gap-6 '>
            <div className={socialLinksstyle}><FaLinkedin /></div>
            <div className={socialLinksstyle}><FaGithub /></div>
            <div className={socialLinksstyle}><CgMail /></div>
            <div className={socialLinksstyle}><FaInstagramSquare /></div>
        </div>
    </div>
  )
}

export default page