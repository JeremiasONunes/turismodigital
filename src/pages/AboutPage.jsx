import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/aboutHero';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen m-2">
            <Navbar />
            <div className="flex-grow bg-gray-100 pt-20 *:relative">
                <AboutHero />
            </div>    
                        <Footer />
        </div>
    );
};

export default AboutPage;