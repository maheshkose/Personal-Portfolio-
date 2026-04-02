'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { queryObjects } from "v8";
import projects, { project } from "@/lib/Projects";

const page = () => {

  const router = useRouter();
 

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
          <div onClick={()=>{router.push(`/Pages/Projects/ProjectsDetails?id=${i}`)}} className="rounded-md overflow-hidden cursor-pointer">
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
          <div className="w-full flex justify-between items-center gap-4 flex-wrap">
            <button className="text-md  px-8 py-2 bg-yellow-500 rounded-md text-nowrap "><a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            <button className="text-md  px-8 py-2 border-2 border-yellow-500 rounded-md"><a href={project.githubLink}target="_blank" rel="noopener noreferrer">GitHub</a></button>
          </div>
        </div>
      ))}
    </div>
  </div>;
};

export default page;
