import React from 'react';
import { motion } from 'framer-motion';
function Project() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-[100vw] flex flex-col justify-center p-10 items-center'>
            <motion.h1 
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className='text-[#4EF0E0] text-center mt-1 font-bold text-6xl'>Projects</motion.h1>
            <div className='cardscont mt-5 flex flex-wrap gap-8'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                    <img className="w-full" src='./src/image/p1.png' alt="Project 1" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-[#4EF0E0] mb-2">MOVIE APP</div>
                        <p className="text-white text-base">Movix, a user-friendly web app built with React, offering a curated selection of movies. With detailed movie listings, personalized recommendations, and responsive design, it provides a seamless movie browsing experience for users.</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="" className="bg-[#4EF0E0] hover:bg-white text-black font-bold py-2 px-4 rounded-full mr-2">View Project</a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                    <img className="w-full" src='./src/image/p2.png' alt="Project 2" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-[#4EF0E0] mb-2">OCHI web clone(frontEnd)</div>
                        <p className="text-white text-base">Created a clone of <span className='text-[#4EF]'>Awarded</span> website, <span className='text-[#4Ef]'>Ochi</span> with seamless transitions and animations using core <span className='text-[#4EF]'>React, framer motion and Tailwind css</span>.</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="" className="bg-[#4EF0E0] hover:bg-white text-black font-bold py-2 px-4 rounded-full mr-2">View Project</a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                    <img className="w-full" src='./src/image/p3.png' alt="Project 3" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-[#4EF0E0] mb-2">TwoGood web clone(frontEnd)</div>
                        <p className="text-white text-base">This project is a website clone of an animated website enhanced with JavaScript animations. With smooth transitions and engaging effects, it offers an immersive user experience. Explore captivating interactions that elevate browsing.</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="" className="bg-[#4EF0E0] hover:bg-white text-black font-bold py-2 px-4 rounded-full mr-2">View Project</a>
                    </div>
                </div>
                {/* Last 3 projects marked as "Coming Soon" */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className=" h-80 w-80 flex justify-center items-center flex-col">
                            <div className="font-bold text-xl text-[#4EF0E0] mb-2">Project</div>
                            <p className="text-white text-base">Coming Soon</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className=" h-80 w-80 flex justify-center items-center flex-col">
                            <div className="font-bold text-xl text-[#4EF0E0] mb-2">Project</div>
                            <p className="text-white text-base">Coming Soon</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className=" h-80 w-80 flex justify-center items-center flex-col">
                            <div className="font-bold text-xl text-[#4EF0E0] mb-2">Project</div>
                            <p className="text-white text-base">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Project;
