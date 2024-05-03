import React from 'react';
import {motion} from 'framer-motion'

function About() {
  return (
   <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1.5 }}
   >
    <motion.h1
    initial={{ y: -40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
    className='text-[#4EF0E0] text-center mt-7 mb-4 font-bold text-6xl'>ABOUT ME</motion.h1>
     <div className='w-full flex m-4 justify-center items-center bg-gray-800'>
      <div className='rounded shadow-lg w-full h-[70vh] md:w-2/3 lg:w-1/2 p-6 flex flex-col md:flex-row items-center justify-center'>
          <img
              src="./src/image/me2.jpg"
              alt="Profile"
              className="w-56 h-56 rounded border border-[#4EF0E0] object-contain object-center mb-4 md:mb-0 md:mr-4"
          />
          <div className='w-full md:w-1/2 text-center ml-8 text-lg text-white md:text-left'>
              <p className='mb-4'>
              Hi, I'm a recent grad who loves web development, especially JavaScript and React. I enjoy creating interactive and engaging web apps that provide a smooth experience for users. I'm constantly learning and looking for new challenges to improve my skills. My aim is to work on exciting projects and grow as a developer in a supportive, collaborative team. </p>
              <a href= "https://wa.me/6397046651" className='border border-[#4EF0E0] rounded text-black px-4 py-2 bg-[#4EF0E0] hover:bg-white hover:text-black transition'>
                  Chat
              </a>
          </div>
      </div>
  </div>
   </motion.div>
  );
}

export default About;
