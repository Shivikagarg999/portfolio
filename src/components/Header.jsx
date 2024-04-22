import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close the mobile menu when the component mounts
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white px-10 w-[100vw] py-4 flex items-center justify-between ">
          
            <div className="flex items-center">
                <img src="https://png.pngitem.com/pimgs/s/238-2384334_my-portfolio-cover-design-hd-png-download.png" alt="Logo" className="h-12" />       
            </div>
        
            <div className="lg:hidden">
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            <ul className={`lg:flex space-x-4 font-custom text-xl ${isMobileMenuOpen ? 'flex flex-col space-y-4 absolute right-0  top-20 opacity-0.2 w-full px-4 py-2' : 'hidden'}`}>
                
                <li>
                    <NavLink to="/" exact className={({ isActive }) => isActive ? "text-[#4EF0E0] underline" : "" } >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#4EF0E0] underline" : ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/project" className={({ isActive }) => isActive ? "text-[#4EF0E0] underline" : ""}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#4EF0E0] underline" : ""}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className='font-custom text-xs'>
            <a href="/src/resume/myres.pdf" download className='text-lg border border-[#4EF0E0] text-white px-2 py-2 rounded-3xl hover:bg-[#4EF0E0] hover:text-white transition duration-300'>
    Download CV
</a>


</div>

        </nav>
    );
};

export default Header;

