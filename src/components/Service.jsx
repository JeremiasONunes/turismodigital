import React from 'react';
import Pousada from '../assets/Pousada.png';
import Guia from '../assets/Guia.png';
import Passeio from '../assets/Passeio.png';
import Restaurante from '../assets/Restaurante.png';
import Bike from '../assets/Bike.png';
import Caminhada from '../assets/Restaurante.png';
import CardService from './CardServices';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const Service = () => {
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
        >
            <div className="relative z-10 w-full">

                <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
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
        </div>
    );
};

export default Service;
