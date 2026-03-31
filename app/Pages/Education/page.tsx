import React from "react";
import { HiMiniAcademicCap } from "react-icons/hi2";

const page = () => {
  const edustyle = "w-full flex flex-col items-start justify-center gap-2 border-2 bg-gray-50 dark:bg-gray-700 dark:text-white text-lg p-2 rounded-md border-yellow-500/10 hover:border-yellow-500/90 hover:-translate-y-2 transition ease-in "
  const eduElementstyle = {
    h1style:"text-2xl font-bold",
    h4style:"text-yellow-500 text-md font-bold",
    pstyle:"font-weight-200 text-gray-400"
  }
  return (
    <div className="w-full pb-20 px-5 lg:px-20 dark:bg-gray-900">
      <div className="w-full  pt-24">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl text-orange-400  font-[900]">Education</h1>
          <div className="w-36 h-2 bg-gradient-to-r from-white via-orange-500 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-orange-500 dark:to-gray-800 "></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 items-center justify-center gap-4">
        <div className="w-full flex items-center justify-start gap-2">
          <HiMiniAcademicCap size={48} className="text-yellow-500"/>
          <h1 className="text-yellow-500 text-3xl font-extrabold">Academic Background</h1>
        </div>
        <div className={edustyle}> 
          <h4 className={eduElementstyle.h4style}>2025 - Present</h4>
          <h1 className={eduElementstyle.h1style}>Master of science (Computer science)</h1>
          <p className={eduElementstyle.pstyle}>Barktulla University</p>
        </div>
        <div className={edustyle}>
           <h4 className={eduElementstyle.h4style}>2022 - 2025</h4>
          <h1 className={eduElementstyle.h1style}>Bachlore of science (Computer science)</h1>
          <p className={eduElementstyle.pstyle}>Raja shakarshah University</p>
        </div>
        <div className={edustyle}>
           <h4 className={eduElementstyle.h4style}>April 2020-March 2021</h4>
          <h1 className={eduElementstyle.h1style}>Intermediate (PCM)</h1>
          <p className={eduElementstyle.pstyle}>Government Excellence Higher Secondary School Betul</p>
          <p className={eduElementstyle.pstyle}>Percentage: 90.6%</p>
        </div>
        <div className={edustyle}>
           <h4 className={eduElementstyle.h4style}>April 2018-March 2019</h4>
          <h1 className={eduElementstyle.h1style}>Matriculation</h1>
          <p className={eduElementstyle.pstyle}>Government Excellence Higher Secondary School Betul</p>
          <p className={eduElementstyle.pstyle}>Percentage: 95.00%</p>
        </div>
      </div>
    </div>
  );
};

export default page;
