import React from 'react'

function ProjectCard(props) {
  return (
    <div
    //style={{ backgroundImage: `url(${props.img})` }}
   
 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
    {/* Hover Effects */}
    <div className='opacity-0 group-hover:opacity-100 '>
    <div className=' w-auto h-auto'>
    <img src={props.img} alt="none"/> 
        </div>
      
      <span className='text-5l  items-center font-bold text-stone-800 tracking-tight text-center'>
       
        <div className=' text-white text-center'>
            {props.name}
        </div>
        <div className=' text-black text-center'>
            {props.language}
        </div>
      </span>
      
      <div className='pt-2 text-center'>
        <a href='/'>
          <button className='text-center rounded-lg px-3 py-3 m-4 bg-white text-stone-800 font-bold text-lg'>
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
 
  )
}

export default ProjectCard