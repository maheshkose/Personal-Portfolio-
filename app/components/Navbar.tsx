import Link from "next/link";
import React from "react";
import Changemode from "./myUi/Changemode";

const Navbar = () => {
    const linkStyle = "dark:text-gray-200 text-gray-800 hover:text-orange-500 transition-colors duration-300  dark:hover:text-orange-500 cursor-pointer font-medium text-xl";
  return (
    <div className="w-full h-auto bg-white dark:bg-gray-900 fixed top-0 left-0 z-50 shadow-md">
      <nav className="w-full h-16 flex items-center justify-around gap-10 text-lg font-medium text-black dark:text-gray-200">
        <Link href="/Pages/Home">
          <h1 className="font-bold text-2xl text-orange-500  hover:text-orange-200 transition-colors duration-300 ">Mahesh Kose</h1>
        </Link>
        {/* <Link href="/Pages">Pages</Link> */}
        <div className="flex items-center justify-around gap-8">
          <Link className={linkStyle} href="/Pages/Projects">Projects</Link>
          <Link className={linkStyle} href="/Pages/Education">Education</Link>
          <Link className={linkStyle} href="/Pages/Skills">Skills</Link>
          <Link className={linkStyle} href="/Pages/ShareFeedback">Share Feedback</Link>
        </div>
        <div>
            <Changemode />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
