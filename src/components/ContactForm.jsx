// Importa as dependências necessárias do React
import React, { useState } from 'react';

// Importa a imagem de fundo para ser usada no estilo inline
import Background from '../assets/background.png';

// Define o componente funcional ContactForm
const ContactForm = () => {
    // Estado que armazena os dados do formulário: nome, email e mensagem
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Função que lida com mudanças nos campos do formulário
    const handleChange = (e) => {
        // Atualiza o estado formData de acordo com o nome do campo e valor digitado
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

        // Exibe a mensagem no console de forma mais descritiva
        console.log(`Mensagem enviada por ${formData.name} (${formData.email}): ${formData.message}`);

        // Mostra um alerta informando que a mensagem foi enviada com sucesso
        alert('Mensagem enviada com sucesso!');

        // Limpa o formulário, resetando o estado para valores vazios
        setFormData({ name: '', email: '', message: '' });
    };

    // Estrutura visual do componente
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
            // Define a imagem de fundo usando estilo inline
            style={{ backgroundImage: `url(${Background})` }}
        >
            {/* Container principal do formulário, com estilização de fundo branco, bordas arredondadas e sombra */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg">
                
                {/* Título do formulário */}
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">
                    Entre em Contato
                </h2>

                {/* Formulário com evento onSubmit */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Campo de entrada: Nome */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Nome
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name} // Valor do campo controlado pelo estado
                            onChange={handleChange} // Atualiza o estado ao alterar o campo
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="Seu nome"
                        />
                    </div>

                    {/* Campo de entrada: Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="seu@email.com"
                        />
                    </div>

                    {/* Campo de entrada: Mensagem */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="Escreva sua mensagem..."
                            rows="5"
                        />
                    </div>

                    {/* Botão de envio */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-auto"
                        >
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Exporta o componente para que possa ser usado em outros arquivos
export default ContactForm;
