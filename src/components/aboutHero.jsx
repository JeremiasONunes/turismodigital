// Importa a biblioteca React, necessária para criar componentes
import React from 'react';

// Importa uma imagem de fundo do diretório de assets
import Background from '../assets/background.png';

// Define o componente funcional AboutHero
const AboutHero = () => {
    return (
        // Container principal da seção
        <div
            // Classes do Tailwind CSS:
            // relative -> posicionamento relativo, útil se quiser adicionar elementos posicionados absolutamente
            // h-[900px] -> altura fixa de 900 pixels
            // bg-cover -> a imagem de fundo cobre toda a área sem distorcer
            // bg-center -> posiciona a imagem no centro
            // flex justify-center -> usa flexbox para centralizar o conteúdo horizontalmente
            // text-white -> todos os textos são brancos
            // bg-gradient-to-b from-gray-500 to-green-600 -> cria um degradê do cinza ao verde, de cima para baixo
            // m-8 -> margem externa de 32px (2rem) em todos os lados
            className="relative h-[900px] bg-cover bg-center flex justify-center text-white bg-gradient-to-b from-gray-500 to-green-600 m-8"
            
            // OBS: A imagem 'Background' foi importada, mas **não está sendo usada**. 
            // Para aplicar a imagem como fundo junto ao Tailwind, poderia substituir o estilo assim:

            // style={{
            //     backgroundImage: `url(${Background})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            // }}

            // Ou poderia configurar uma classe no Tailwind usando `bg-[url('../assets/background.png')]`, 
            // se estiver com Tailwind configurado para suportar isso.
        >
            <div>
                {/* Título principal da seção */}
                <h1 className='text-3xl font-bold text-center mt-4'>
                    Sobre Nós
                </h1>

                <div>
                    {/* Parágrafo introdutório */}
                    <p className='text-center mt-4'>
                        Bem-vindo à página Sobre. Aqui você pode adicionar informações sobre o seu projeto ou empresa.
                    </p>
                </div>

                <div className='mt-10'>
                    {/* Subtítulo da seção */}
                    <h2 className='text-2xl font-semibold text-center'>
                        Nossa Missão
                    </h2>

                    {/* Descrição da missão */}
                    <p className='text-center mt-4'>
                        Oferecer as melhores experiências de turismo digital para nossos usuários.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Exporta o componente para ser utilizado em outros lugares da aplicação
export default AboutHero;
