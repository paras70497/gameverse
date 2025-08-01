import React, { useState } from 'react';
import { GamepadIcon } from './icons';

type LoginModalProps = {
  onLogin: (username: string) => void;
};

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D0E1B] text-white font-sans p-4 overflow-hidden">
        {/* Background glowing blobs */}
        <div className="absolute top-0 -left-16 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 -right-16 w-96 h-96 bg-fuchsia-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10 w-full max-w-md text-center">
            <div className="bg-slate-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg shadow-lg" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'}}>
                        <GamepadIcon className="w-10 h-10 text-cyan-400" />
                    </div>
                </div>
                <h1 className="text-4xl font-extrabold tracking-wider text-white mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)'}}>
                    Enter the <span className="text-cyan-400">GameVerse</span>
                </h1>
                <p className="text-gray-400 mb-8">Choose your player name to begin.</p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="e.g. PlayerOne"
                            className="w-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg py-3 px-5 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                            required
                            aria-label="Username"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                        style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'}}
                        disabled={!username.trim()}
                    >
                        Start Gaming
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};
