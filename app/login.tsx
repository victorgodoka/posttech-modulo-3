'use dom';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import './global.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Aqui você adicionaria a lógica de autenticação
    console.log('Login:', { email, password });
    alert('Login realizado com sucesso!');
    router.push('/home');
  };

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Logo e Título */}
      <div className="flex flex-col items-center mb-16">
        <img src="./logo-w.png" alt="Logo" className="w-32 h-32" />
      </div>

      {/* Formulário */}
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-500 py-4 px-6 rounded-full focus:outline-none focus:border-teal-500 transition-colors"
            autoCapitalize="none"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-500 py-4 px-6 rounded-full focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 px-6 rounded-full transition-colors mt-6"
        >
          Log in
        </button>
      </form>

      {/* Link para registro */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link href="/register">
            <span className="text-teal-400 underline">Sign up</span>
          </Link>
        </p>

        <Link href="/">
           <span className="text-teal-400 text-sm mt-4 block">
            {"<"} Back to home
          </span>
        </Link>
      </div>
    </div>
  );
}
