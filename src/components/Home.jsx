import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex justify-center items-center w-[100vw] h-[80vh] mb-3'>
      <div className='w-full flex-col mt-4  justify-center items-center bg-gray-800  font-custom'>
        <motion.h2 
         initial={{ x: -100 }}
         animate={{ x: 0 }}
         transition={{ duration: 1 }}
        className='text-center text-[#4EF0E0] mt-5 text-6xl font-bold'>SHIVIKA GARG</motion.h2>
        <motion.h3
         initial={{ x: +100 }}
         animate={{ x: 0 }}
         transition={{ duration: 1 }}
        className='text-center text-white uppercase text-2xl'>Mern Stack developer</motion.h3>
        <div className='mx-auto flex justify-center'>
          <p className='mt-4 text-xl w-96 text-white text-center'>
            A fresher passionate about creating <span className='text-[#4EF0E0]'>seamless</span> and engaging user experiences on the <span className='text-[#4EF0E0]'>web</span>.
          </p>
        </div>
        <div className="flex justify-center m-3 items-center">
          <img
            src="./src/image/mee.jpg"
            alt="Profile"
            className="rounded-full border border-[#4EF0E0] h-64 object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
