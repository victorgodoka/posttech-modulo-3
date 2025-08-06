'use dom';
import { Link } from 'expo-router';
import './global.css';

export default function Index() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Logo e Nome */}
      <div className="flex flex-col items-center mb-16">
        <img src="./logo-w.png" alt="Logo" className="w-64 h-64" />
      </div>

      {/* Botões */}
      <div className="w-full max-w-sm space-y-4">
        <Link href="/register" asChild>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 px-6 rounded-full transition-colors">
            Sign up with email
          </button>
        </Link>
        
        <Link href="/login" asChild>
          <button className="w-full border-2 border-gray-600 hover:border-gray-500 text-white font-medium py-4 px-6 rounded-full transition-colors">
            Log in
          </button>
        </Link>
      </div>

      {/* Texto legal */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm px-4">
          By creating an account or using this app, you agree to cashapp.exe's{' '}
          <span className="text-teal-400 underline">Terms of Use</span> and{' '}
          <span className="text-teal-400 underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
