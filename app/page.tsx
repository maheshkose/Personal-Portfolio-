'use client'
import Image from "next/image";
import { AppconHook } from "./context/AppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
   const router = useRouter();
   useEffect(() => {
    router.push('/Pages/Home');;
   }, [])
   
  return (
   <div>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Portfolio </h1>
   </div>
  );
}
