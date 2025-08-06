'use dom';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import './global.css';
import { createUser } from './firebase/auth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    
    setLoading(true);
    
    try {
      await createUser(email, password);
      alert('Conta criada com sucesso!');
      router.push('/home');
    } catch (error: any) {
      console.error('Erro ao criar conta:', error);
      alert(`Erro ao criar conta: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Logo e Título */}
      <div className="flex flex-col items-center mb-16">
        <img src="./logo-w.png" alt="Logo" className="w-32 h-32" />
        <h1 className="text-white text-2xl font-semibold -mt-6 mb-2">cashapp.exe</h1>
        <h2 className="text-white text-xl font-medium">Sign up</h2>
      </div>

      {/* Formulário */}
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-500 py-4 px-6 rounded-full focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
        
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
        
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-500 py-4 px-6 rounded-full focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'} text-white font-medium py-4 px-6 rounded-full transition-colors mt-6`}
        >
          {loading ? 'Creating account...' : 'Sign up'}
        </button>
      </form>
      
      {/* Link para login */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href="/login">
            <span className="text-teal-400 underline">Log in</span>
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
