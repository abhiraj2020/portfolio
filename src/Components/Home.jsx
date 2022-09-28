import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi';
function Home() {
  return (
    <div name='home'className='w-full h-screen bg-[#747772]'>
        {/*text-container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-3xl text-white 600'>Hi...I'am</p>
         <h1 className='text-4xl text-gray-900 sm:text-7xl font-bold hover:text-indigo-800'>ABHIRAJ MOHAN</h1>
         <h2 className='text-3xl text-white sm:text-6xl font-serif' >I am a junior web Developer.</h2>
         <h2 className='text-3xl text-white sm:text-5xl font-serif' >interested in full stack development</h2>
         <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-black'>explore<HiArrowNarrowRight/></button>
         </div>
        </div>
    </div>
  )
}

export default Home