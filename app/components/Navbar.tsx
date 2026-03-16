import Link from "next/link";
import React from "react";

const Navbar = () => {
    const linkStyle = "text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300";
  return (
    <div className="w-full h-auto bg-amber-50 dark:bg-gray-900">
      <nav className="w-full h-16 flex items-center justify-around gap-10 text-lg font-medium text-gray-800 dark:text-gray-200">
        <Link href="/Pages/Home">
          <h1 className="font-bold text-2xl text-orange-500  hover:text-orange-200 transition-colors duration-300">Mahesh Kose</h1>
        </Link>
        {/* <Link href="/Pages">Pages</Link> */}
        <div className="flex items-center justify-around gap-8">
          <Link className={linkStyle} href="/Pages/Projects">Projects</Link>
          <Link className={linkStyle} href="/Pages/Education">Education</Link>
          <Link className={linkStyle} href="/Pages/Skills">Skills</Link>
          <Link className={linkStyle} href="/Pages/ShareFeedback">Share Feedback</Link>
        </div>
        <div>
            <button>
                
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
