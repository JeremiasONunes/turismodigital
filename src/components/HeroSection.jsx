import React from 'react';
import Background from '../assets/background.png'; 

const Hero = () => {
    return (
        <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div />
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Bem-vindo à Nova Serra Verde
                </h1>
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Experiências únicas em meio à natureza, com hospitalidade, aventura e sabores inesquecíveis.
                </p>
                <a
                    href="/service"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                    Conheça nossos serviços
                </a>
            </div>
        </div>
    );
};

export default Hero;
