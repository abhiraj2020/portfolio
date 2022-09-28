import React from 'react'
import {HiMail} from 'react-icons/hi'
import {HiPhone} from 'react-icons/hi'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#747772] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white-600 text-stone-800'>Contact Me</p>
 
                <p className='text-stone-800 text-4xl py-4 hover:text-red-50'><HiMail/> abhirajmohan2021@depaul.edu.in</p>
                <p className='text-stone-800text-4xl py-4 hover:text-red-50'>abhirajmohan9716@gmail.com </p>
                <p className='text-stone-800 text-4xl hover:text-red-50'><HiPhone/>8547141744 </p>
            </div>
            
            <button className='text-stone-800   hover:bg-green-600 hover:border-stone-900 border-2 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact