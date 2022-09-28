import React from 'react';
import Card from "./Card";
import Details from './Details';
const createCard =(value) =>{return(<Card key ={value.id} name={value.name} />)}
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#747772] text-stone-800'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div className='pb-8'>
        <p1 className='text-4xl font-bold inline border-b-4 border-white-600 text-stone-800'>SKILLS</p1>
       <div className='w-auto grid grid-cols-2  sm:grid-cols-4 gap-6 text-center py-8'>
       {Details.map(createCard)}
       </div>
      </div>
       </div>
   
    </div>
  );
};

export default Skills;


       
          