import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RegisterPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simula cadastro e armazena dados no localStorage
        const novoUsuario = { nome, email };
        localStorage.setItem('user', JSON.stringify(novoUsuario));
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/'; 
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col">
            <Navbar />

            <div className="flex flex-1 items-center justify-center mt-24 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Criar Conta</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Senha</label>
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-colors"
                        >
                            Cadastrar
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm">
                        Já tem uma conta? <a href="/login" className="text-green-700 font-semibold hover:underline">Entrar</a>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RegisterPage;
