import React from 'react';

function Card(props) {
  return (
         <div className='text-2xl text-stone-800 shadow-md shadow-[#1b2737] hover:scale-110 duration-300  hover:bg-slate-100 hover:border-black  '>
                  <p className='my-4'>{props.name}</p>
                  
              </div>
  )
}

export default Card