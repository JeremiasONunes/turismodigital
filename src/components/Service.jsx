// Importação das dependências e componentes necessários
import React from 'react';
// Importação de imagens utilizadas nos serviços
import Pousada from '../assets/pousada.png';
import Guia from '../assets/guia.png';
import Passeio from '../assets/passeio.png';
import Restaurante from '../assets/restaurante.png';
import Bike from '../assets/bike.png';
import Caminhada from '../assets/caminhada.png'; 

// Importação do componente CardService para exibir cada serviço
import CardService from './CardServices';

// Importação dos componentes do Swiper para criar o carrossel
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos padrão do Swiper

// Componente funcional que representa a seção de serviços
const Service = () => {
    // Array contendo os dados de cada serviço: imagem, título e descrição
    const services = [
        { image: Pousada, title: 'Pousada do Sol', description: 'Desfrute de um conforto incomparável.' },
        { image: Guia, title: 'Guias de Turismo', description: 'Explore com nossos guias especializados.' },
        { image: Passeio, title: 'Passeios de Aventura', description: 'Aventura e adrenalina para toda a família.' },
        { image: Restaurante, title: 'Restaurante da Serra', description: 'Culinária típica com ingredientes locais.' },
        { image: Bike, title: 'Passeios de Bike', description: 'Explore os pontos turísticos de bike.' },
        { image: Caminhada, title: 'Caminhadas na Natureza', description: 'Caminhadas em trilhas exuberantes.' },
    ];

    return (
        <div>
            <div className="relative z-10 w-full h-full">
                {/* Título da seção */}
                <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                    Serviços
                </h1>

                {/* Container que ajusta a exibição dos serviços, com espaçamento e centralização */}
                <div className="text-center pt-10 px-4 pb-20 w-full flex justify-center">
                    {/* Verificação condicional:
                        - Se houver mais de 3 serviços, exibe em carrossel (Swiper).
                        - Se não, exibe em grid estático. */}
                    {services.length > 3 ? (
                        // Configuração do carrossel Swiper
                        <Swiper
                            slidesPerView="auto" // Exibe quantidade automática de slides conforme o espaço
                            spaceBetween={20} // Espaçamento entre slides
                            loop={true} // Faz o carrossel ser infinito
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
                            {/* Mapeamento do array de serviços para criar cada slide do Swiper */}
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
                        // Caso tenha 5 ou menos serviços, exibe em grid responsivo
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

// Exportação do componente para ser usado em outras partes do projeto
export default Service;
