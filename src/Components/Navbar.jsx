import React from 'react'
import { useState } from 'react'
import aj from '../Assets/aj.png'
import {FaBars,FaTimes,FaLinkedin,FaWhatsapp,FaGithub} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav,setNav]=useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#747772] text-black text-2xl'>
  
    <div>
        <img src={aj} alt="logo" style={{width:'50px'}}/>
    </div>
    {/*menu*/}
    
        <ul className='hidden md:flex  '>
        <li className='hover:bg-slate-100 border-spacing-2 border-y-gray-900'>
          <Link to='home' smooth={true} duration={500}>
           <p1>HOME</p1> 
          </Link>
        </li>
        <li className='hover:bg-slate-100  border-spacing-2 border-y-gray-900'>
          <Link to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='hover:bg-slate-100 border-spacing-2 border-y-gray-900'>
          <Link to='skills' smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className='hover:bg-slate-100 border-spacing-2 border-y-gray-900'>
          <Link to='project' smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li className='hover:bg-slate-100 border-spacing-2 border-y-gray-900'>
          <Link to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
        </ul>
    
    {/*hamburger*/}
    <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars/>:<FaTimes/>}
    </div>
     {/* mobile-menu*/}
     
        <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-white-600'}>
            <li className='py-6 text-4xl'>
            {' '}
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='py-6 text-4xl'>
            {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
            <li className='py-6 text-4xl'> {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Project
          </Link></li>
            <li className='py-6 text-4xl'>
            {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
         {/* social-icons*/}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0 justify-between items-center'>
          <ul>
            <li>
                <a className='flex justify-between items-center w-full text-white-600 m-2 hover:ml-[20px] duration-300 bg-[#747772]' href='https://www.linkedin.com/in/abhiraj-mohan-553284177/' >

                    <FaWhatsapp size={30}/>
                     
                </a>
                
            </li>
            <li>
                <a className='flex justify-between items-center w-full text-white-600 m-2 hover:ml-[20px] duration-300 bg-[#747772]' href='/'>

                    <FaLinkedin size={30}/>
                     
                </a>
            </li>
            <li>
                <a className='flex justify-between items-center w-full text-white-600  m-2 hover:ml-[20px] duration-300 bg-[#747772]' href='/'>

                    <FaGithub size={30}/>
                     
                </a>
            </li>
            <li>
                <a className='flex justify-between items-center w-full text-white-600  m-2 hover:ml-[20px] duration-300 bg-[#747772]' href='/'>

                    <HiMail size={30}/>
                     
                </a>
            </li>
          </ul>
         </div>




  
  
  
  
  </div>
  )
}

export default Navbar