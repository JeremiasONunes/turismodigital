import React from 'react';
import Pousada from '../assets/Pousada.png';
import Guia from '../assets/Guia.png';
import Passeio from '../assets/Passeio.png';
import Restaurante from '../assets/Restaurante.png';
import Bike from '../assets/Bike.png';
import Caminhada from '../assets/Restaurante.png';
import CardService from '../components/CardServices';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../assets/background.png'; // <-- Use uma imagem geral como fundo da página

const ServicePage = () => {
    const services = [
        { image: Pousada, title: 'Pousada do Sol', description: 'Desfrute de um conforto incomparável.' },
        { image: Guia, title: 'Guias de Turismo', description: 'Explore com nossos guias especializados.' },
        { image: Passeio, title: 'Passeios de Aventura', description: 'Aventura e adrenalina para toda a família.' },
        { image: Restaurante, title: 'Restaurante da Serra', description: 'Culinária típica com ingredientes locais.' },
        { image: Bike, title: 'Passeios de Bike', description: 'Explore os pontos turísticos de bike.' },
        { image: Caminhada, title: 'Caminhadas na Natureza', description: 'Caminhadas em trilhas exuberantes.' },
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
            }}
        >
            <div className="relative z-10 w-full">
                <Navbar />
                <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
                    Serviços
                </h1>

                <div className="text-center pt-10 px-4 pb-20 w-full flex justify-center">
                    {services.length > 5 ? (
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={20}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        image={service.image}
                                        title={service.title}
                                        description={service.description}
                                        link="#"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                            {services.map((service, index) => (
                                <CardService
                                    key={index}
                                    image={service.image}
                                    title={service.title}
                                    description={service.description}
                                    link="#"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Overlay de escurecimento para garantir contraste */}
            <div className="absolute inset-0 bg-black opacity-30 z-0" />
        </div>
    );
};

export default ServicePage;
