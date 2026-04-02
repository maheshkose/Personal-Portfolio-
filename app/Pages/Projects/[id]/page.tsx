
import React from 'react'
import projects from '@/lib/Projects';
import { CardImage } from '@/app/components/projectcard';

export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString(),
  }));
}
const  Page = async ({params}:{params:Promise<{ id: string }>}) => {
  // console.log(await params.id);
  
  const { id }= await params;
  const project = projects[Number(id)];

  if (!project) {
    return <div className='py-20'>Project not found</div>;
  }

  return (
    <div className='py-20 dark:bg-gray-900'>
      <CardImage project={project} />
    </div>
  );
};

export default Page;