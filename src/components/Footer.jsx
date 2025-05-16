import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // ícones de redes sociais

const Footer = () => {
return (
    <footer className="w-full bg-gradient-to-r from-green-200 to-green-600 text-gray-800 py-2 px-3 shadow-lg mt-auto">
    <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-black">&copy; {new Date().getFullYear()} Nova Serra Verde. Todos os direitos reservados.</p>
        </div>

        <div className="flex space-x-6">
            <a href="#" className="hover:text-green-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-300"><FaInstagram /></a>
            <a href="#" className="hover:text-green-300"><FaWhatsapp /></a>
        </div>
    </div>
</footer>

);
};

export default Footer;
