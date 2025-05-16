import React from 'react';

const CardService = ({ image, title, description, link }) => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto">
            {/* Imagem */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
                {/* Título */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>

                {/* Descrição */}
                <p className="text-gray-600 mt-2 text-sm sm:text-base flex-grow">{description}</p>

                {/* Botão */}
                <a
                    href={link}
                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition duration-300"
                >
                    Saiba mais
                </a>
            </div>
        </div>
    );
};

export default CardService;
