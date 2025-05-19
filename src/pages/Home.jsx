import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/HeroSection';
import Service from '../components/Service';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <div>
            <NavBar />
            <h1>Welcome to Turismo Digital</h1>
            <p>Explore the best destinations and plan your next adventure!</p>
            <Hero />      
            <Service />
        </div>
        <Footer />
        </div>
    );
};

export default Home;