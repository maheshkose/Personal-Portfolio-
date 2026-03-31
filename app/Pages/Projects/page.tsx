'use client'
import Image from "next/image";
import React, { useState } from "react";
import { queryObjects } from "v8";

const page = () => {
  type project = {
    title: string;
    imgUrl: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
  };
  const projects: project[] = [
  {
    title: "Gym Management",
    imgUrl: "/gym.png",
    description: "A full-stack web application for managing gym operations, including member registration, subscription plans, and attendance tracking.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://gymmanagementapp-admin.onrender.com",
    githubLink: "https://github.com/maheshkose/GymManagementApp.git",
  },
  {
    title: "Quick Food Client",
    imgUrl: "/quickfr.png",
    description: "A food delivery web application where users can browse menus, place orders, and track their order status in real-time.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://quick-food-2.onrender.com",
    githubLink: "https://github.com/maheshkose/Quick-food.git",
  },
  {
    title: "Quick Food Dashboard",
    imgUrl: "/quickds.png",
    description: "An admin dashboard for managing food delivery operations, including order management, menu updates, and customer insights.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://quick-food-admin.onrender.com",
    githubLink: "https://github.com/maheshkose/Quick-food.git",
  },
  {
    title: "Hospital Management Dashboard",
    imgUrl: "/hosdash.png",
    description: "A comprehensive admin panel for managing hospital operations such as patient records, doctor profiles, and appointment scheduling.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://hospital-managment-dashboard.onrender.com",
    githubLink: "https://github.com/maheshkose/hospital-managment.git",
  },
  {
    title: "Hospital Management Frontend",
    imgUrl: "/hospitalfrontend.png",
    description: "A user-friendly frontend application where patients can explore hospital services, book appointments, and communicate with staff.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://hospital-managment-frontend.onrender.com",
    githubLink: "https://github.com/maheshkose/hospital-managment.git",
  },
  {
    title: "Pixabay Clone",
    imgUrl: "/pixabay.png",
    description: "A clone of the Pixabay platform built for practice, allowing users to search and explore high-quality images using an API.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://pixabay-two-mu.vercel.app/",
    githubLink: "https://github.com/maheshkose/pixabay.git",
  }
];

  const [searchQuery, setsearchQuery] = useState<string>("");
  const [qsudoProjects, setqsudoProjects] = useState<project[]>([...projects]);
  const [renderProjects, setrenderProjects] = useState<project[]>([...projects]);
 
  const search = (e:any):void=>{
    setsearchQuery((prev)=>{
      // if (e.target.value === "") {
      //   setrenderProjects([...projects]);
      // }
      return e.target.value});
      
    const rp = qsudoProjects.filter((p)=>{
      let str = (p.title + p.description+p.techStack.flat().join(" ")).toLocaleLowerCase();
      console.log(str);
      return str.includes(searchQuery.toLocaleLowerCase()) ;  
      
    })
    setrenderProjects([...rp]);
  }
  console.log(renderProjects);
  
  const sortstyle = "px-2 bg-amber-400 text-white rounded-md text-lg "
  return <div  className="w-full h-auto flex flex-col items-center justify-start gap-3  bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50  py-30 lg:px-20">
    <div className="w-full my-8">
      <div className='w-full flex flex-col items-center justify-center gap-5'>
        <h1 className='text-5xl text-orange-400  font-[900]'>Projects</h1>
        <div className='w-36 h-2 bg-gradient-to-r from-white via-orange-500 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-orange-500 dark:to-gray-800 '></div>
      </div>
    </div>
    <div className="w-[95%] flex flex-col justify-center items-center">
      <div className="w-full lg:w-[50%]">
        <input type="text" placeholder="Search by Title,Tech,Keyword..." className="w-full h-auto p-2 text-sm outline-0 my-4 border-2 border-yellow-400/20 rounded-lg"
        name="searchQ"
        value={searchQuery}
        onChange={(e:any)=>{search(e)}}
        />
      </div>
      {/* <div className="w-[90%] flex items-center justify-center gap-2 flex-wrap my-4">
        
        <div className={sortstyle}>All</div>
        <div className={sortstyle}>Frontend</div>
        <div className={sortstyle}>Backend</div>
        <div className={sortstyle}>MERN</div>
        <div className={sortstyle}>Next.js</div>
        <div className={sortstyle}>Database</div>

      </div> */}
    </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10 px-2">
      {renderProjects?.map((project,i)=>(
        <div key={i} className="flex flex-col items-start gap-4 bg-[#ccc] dark:bg-gray-800 p-8 rounded-lg">
          <div>
            <Image src={project.imgUrl} alt="" width={400} height={300} className="rounded-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
          <div className="text-gray-200 text-lg">
            {project.description}
          </div>
          <div className="w-full flex items-center justify-start gap-3 flex-wrap">
            {project.techStack?.map((tech,i)=>
              <div key={i} className="p-2 bg-amber-100/50   rounded-md px-2 py-1 text-md text-yellow-200">
                {tech}
              </div>
            )}
          </div>
          <div className="w-full flex justify-start gap-4">
            <button className="w-full text-2xl px-8 py-2 bg-yellow-500 rounded-md text-nowrap "><a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            <button className="w-full text-2xl px-8 py-2 border-2 border-yellow-500 rounded-md"><a href={project.githubLink}target="_blank" rel="noopener noreferrer">GitHub</a></button>
          </div>
        </div>
      ))}
    </div>
  </div>;
};

export default page;
