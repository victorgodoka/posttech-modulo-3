'use dom';
import './global.css';
import { router } from 'expo-router';
import React from 'react';

export default function Home() {
  const handleLogout = () => {
    const confirmed = confirm('Tem certeza que deseja sair?');
    if (confirmed) {
      console.log('Logout realizado');
      router.push('/');
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Logo e Boas-vindas */}
      <div className="flex flex-col items-center mb-16">
        <img src="./logo-w.png" alt="Logo" className="w-32 h-32" />
        <h1 className="text-white text-2xl font-semibold -mt-6 mb-2">cashapp.exe</h1>
        <h2 className="text-white text-xl font-medium">Welcome!</h2>
        <p className="text-gray-400 text-sm mt-2">You are successfully logged in</p>
      </div>

      {/* Menu de opções */}
      <div className="w-full max-w-sm space-y-4">
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 px-6 rounded-full transition-colors">
          Profile
        </button>
        
        <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium py-4 px-6 rounded-full transition-colors">
          Settings
        </button>
        
        <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium py-4 px-6 rounded-full transition-colors">
          Transactions
        </button>
        
        <button 
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-6 rounded-full transition-colors mt-8"
        >
          Logout
        </button>
      </div>
      
      {/* Informações adicionais */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Logged in successfully
        </p>
      </div>
    </div>
  );
}
