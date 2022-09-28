import React from 'react';
//import img from "../Assets/py.png";

import ProjectCard from "./ProjectCard";
import Work from "./Work.js";
const Projects = () => {
  const createWork = (value)=>{return(<ProjectCard key={value.id} name={value.name} language={value.language} img={value.img}/>)}
  return (
    <div name='project' className='w-full md:h-screen text-stone-800 bg-[#747772]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-stone-800 border-white-600'>
            Projects
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {Work.map(createWork)}
           
          
        
         
         
        </div>
      </div>
    </div>
  );
};

export default Projects;