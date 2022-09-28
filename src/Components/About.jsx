import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#747772] text-stone-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-white-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abhiraj, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p> I am interested in developing applications in react js and node js. and my aim is to become a full stack developer.
                 I hope that working with great organizations will definitely be an advantage for my carrier..</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;