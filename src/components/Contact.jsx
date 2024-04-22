import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-[100vw] flex justify-center p-10 items-center'
        >
            <div className='main w-full flex flex-col md:flex-row items-center justify-center'>
                <section className='w-full md:w-[40%] bg-slate-200 h-full flex flex-col justify-center items-center'>
                    <h2 className='text-center text-[#4EF0E0] font-bold text-4xl uppercase mb-6'>Let's get in touch</h2>
                    <img
                        src='https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png'
                        className='w-full h-auto p-4'
                        alt='Contact illustration'
                    />
                </section>
                <div className='w-full md:w-[60%] p-4 flex flex-col'>
                    <form action='https://formspree.io/f/mleqaebq' method='POST' className='p-10'>
                        <motion.h2
                        initial={{ y: -40 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className='text-center text-[#4EF0E0] font-bold text-4xl mb-6'>Contact me</motion.h2>
                        <input
                            type='text'
                            name='username'
                            placeholder='Enter your name'
                            className='rounded-2xl mt-3 h-12 px-10 text-lg w-full p-1'
                        />
                        <input
                            type='email'
                            name='mail'
                            placeholder='Enter your email'
                            className='rounded-2xl mt-3 h-12 px-10 text-lg w-full'
                        />
                        <input
                            type='text'
                            name='message'
                            placeholder='Your message'
                            className='rounded-2xl mt-3 h-32 w-full p-4 text-lg'
                        />
                        <div className='text-center mt-3'>
                            <button
                                className='border border-[#4EF0E0] rounded text-black m-5 py-3 px-6 bg-[#4EF0E0] hover:bg-white hover:text-black transition'
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
