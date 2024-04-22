import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 w-[100vw] text-white border-gray-700 border-2 px-4 py-2 ">
            <div className="container mx-auto text-center">
               <div>
                <h2 className="text-2xl font-bold mb-4 text-[#4EF0E0]">Get in Touch</h2>
                    <a href="https://wa.me/6397046651" className="mx-4 hover:text-[#4EF0E0] text-3xl " target="_blank">
                    <i class="ri-whatsapp-line"></i>
                    </a>
                    <a href="https://github.com/Shivikagarg999" className="mx-4 hover:text-[#4EF0E0] text-3xl" target="_blank">
                    <i class="ri-github-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shivika-garg-611150260/" className="mx-4 text-3xl hover:text-[#4EF0E0]" target="_blank">
                    <i class="ri-linkedin-box-fill"></i>
                    </a>
                </div>
                <p className="text-lg mt-2">&copy; {new Date().getFullYear()} Shivika Garg. All rights reserved.</p>
                
            </div>
        </footer>
    );
};

export default Footer;
