import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div>
                <h1 className='text-3xl font-bold text-center mt-60'>Sobre Nós</h1>
                <div>
                    <p className='text-center mt-4'>Bem-vindo à página Sobre. Aqui você pode adicionar informações sobre o seu projeto ou empresa.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-2xl font-semibold text-center'>Nossa Missão</h2>
                    <p className='text-center mt-4'>Oferecer as melhores experiências de turismo digital para nossos usuários.</p>          
                </div>
            
        </div>
        <Footer />
        </div>
    );
};

export default AboutPage;