import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import Image from 'next/image';
        

const page = () => {
  const skillStyle = "w-full lg:w-64 h-32 bg-gray-900 border-gray-100 border-1 rounded-md flex items-center justify-center text-white text-2xl hover:bg-gray-790 transition-colors duration-300 hover:border-gray-300 hover:scale-110 transition-transform duration-400  cursor-pointer dark:hover:bg-gray-700 dark:border-1 dark:hover:text-white dark:hover:border-gray-300 flex-col gap-1";
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-3  bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 px-5 lg:px-20 py-30">
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-5xl text-orange-400  font-[900]'>Skills</h1>
        <div className='w-36 h-2 bg-gradient-to-r from-white via-orange-500 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-orange-500 dark:to-gray-800 '></div>
      </div>
      <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center mt-20 px-3'>
        <div className={skillStyle}>
          <FaJsSquare color='yellow'/>
          <span>JavaScript</span>
        </div>
        <div className={skillStyle}>
          <SiTypescript color="#3178C6" />
          <span>TypeScript</span>
        </div>
        <div className={skillStyle}>
          <FaReact color='#61DAFB'/>
          <span>React</span>
        </div>
        <div className={skillStyle}>
          <FaNodeJs color='#339933'/>
          <span>Node Js</span>
        </div>
        <div className={skillStyle}>
          <SiExpress />
          <span>Express Js</span>
        </div>
        <div className={skillStyle}>
          <SiMongodb color='#47A248'/>
          <span>MongoDB</span>
        </div>
        <div className={skillStyle}>
          <FaHtml5 color='#E34F26'/>
          <span>HTML</span>
        </div>
        <div className={skillStyle}>
          <FaCss3Alt color='#1572B6'/>
          <span>CSS</span>
        </div>
        <div className={skillStyle}>
          <FaGitAlt color='#F05032'/>
          <span>
            Git
          </span>
        </div>
        <div className={skillStyle}>
          <SiNextdotjs />
          <span>Next Js</span>
        </div>
        <div className={skillStyle}>
          <BiLogoPostgresql/>
          <span>PostGresql</span>
        </div>
        <div className={skillStyle}>
          <Image
          src={'/cpp.webp'}
          alt='cpp'
          width={40}
          height={40}
          className='rounded-md'
          />
          <span>
            CPP
          </span>
        </div>
        <div className={skillStyle}>
          <FaPython/>
          <span>Python</span>
        </div>
        {/* <div className={skillStyle}></div>
        <div className={skillStyle}></div>
        <div className={skillStyle}></div> */}
        
      </div>
    </div>
  )
}

export default page