'use client'
import React from 'react'
import projects from '@/lib/Projects';
import { useSearchParams } from 'next/navigation';
import { CardImage } from '@/app/components/projectcard';

const page = ({params}:{params:{id:string}}) => {
  const queryparam = useSearchParams();
  const id:string = params.id;
  console.log(id);
  return (
    <div className='py-20 dark:bg-gray-900'><CardImage project={projects[Number(id)]}/></div>
  )
}

export default page