import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import Feedbackform from '@/app/components/feedbackform';
import Contactform from '@/app/components/contactForm';

const page = () => {
    const starstyle = 'm-10 text-gray-600 hover:text-amber-300 hover:-rotate-20 hover:scale-125 transition ease-in';
    
  return (
    <div className='w-full py-20 px-10 lg:px-20 bg-[fff] dark:bg-[#111] flex flex-col justify-between items-center'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-20  dark:bg-gray-800/40 p-5 rounded-md'>
        <div className='flex flex-col'>
          <h1 className='text-5xl text-yellow-500 font-extrabold p-5'>Contact</h1>
          <p className='text-lg text-gray-600 dark:text-gray-200'>I’m open to full-time roles, internships, and collaborative projects. You can reach out for opportunities, or discussions.</p>
        </div>
        <div>
         <Contactform />
        </div>
      </div>
      <div className='w-full lg:w-[50%] mt-20 dark:bg-gray-800/40 p-5 rounded-md'>
         <div className='w-full flex flex-col items-center justify-center gap-5'>
        <h1 className='text-5xl text-orange-400  font-[900]'>Feedback</h1>
        <div className='w-36 h-2 bg-gradient-to-r from-white via-orange-500 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-orange-500 dark:to-gray-800 '></div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-3xl text-yellow-500 font-extrabold pt-10'>Before you go...</h1>
          <p className='text-lg dark:text-gray-400 text-wrap '>I’d like to hear your valuable feedback on this portfolio experience.</p>
        </div>
        <div className='w-full flex justify-around'>
          <IoStarSharp size={40} className={starstyle} />
          <IoStarSharp size={40} className={starstyle} />
          <IoStarSharp size={40} className={starstyle} />
          <IoStarSharp size={40} className={starstyle} />
          <IoStarSharp size={40} className={starstyle} />
        </div>
        <Feedbackform />
      </div>
    </div>
  )
}

export default page