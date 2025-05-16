import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-gradient-to-r from-green-200 to-green-600 text-gray-800 py-0 px-2 shadow-lg fixed top-0 left-0 z-30">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo + Texto */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-20 w-20 m-1" />
                    <a href="/" className="ml-[7.5px] text-2xl font-extrabold text-white hover:text-green-100 transition-colors duration-300">
                        Nova Serra Verde
                    </a>
                </div>

                {/* Links de navegação - Desktop */}
                <div className="hidden lg:flex space-x-8">
                    <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
                    <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
                    <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
                    <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>
                    <a href="/Login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
                </div>

                {/* Menu Hamburguer - Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile - Responsivo */}
            <div className={`lg:hidden bg-gradient-to-r from-green-200 to-green-600 p-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="/" className="block text-white py-2 hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
                <a href="/about" className="block text-white py-2 hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
                <a href="/service" className="block text-white py-2 hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
                <a href="/contact" className="block text-white py-2 hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>
                <a href="/Login" className="block text-white py-2 hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
