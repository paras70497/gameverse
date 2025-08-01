import React from 'react';
import type { Game } from '../types';
import { StarIcon } from './icons';

type FeaturedBannerProps = {
  game: Game;
};

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ game }) => {
  return (
    <div className="relative bg-white/50 dark:bg-slate-900/50 rounded-2xl p-8 overflow-hidden backdrop-blur-lg border border-gray-200 dark:border-slate-700">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30" style={{ filter: 'blur(10px)' }}></div>
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-4">
                <span className="px-3 py-1 text-xs font-bold text-white uppercase bg-gradient-to-r from-pink-500 to-red-500 rounded-full self-start">
                    Featured Game
                </span>
                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)'}}>
                    {game.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
                    {game.description}
                </p>
                <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-200/50 dark:bg-cyan-900/50 rounded-full">
                        {game.category}
                    </span>
                    <div className="flex items-center space-x-1">
                        <StarIcon className="w-5 h-5 text-yellow-400" />
                        <span className="font-bold text-gray-900 dark:text-white">{game.rating}</span>
                    </div>
                </div>
                <div className="pt-4">
                    {game.path ? (
                        <a 
                            href={game.path} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'}}
                        >
                            Play Now
                        </a>
                    ) : (
                        <button 
                            disabled
                            className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg shadow-inner cursor-not-allowed opacity-80"
                        >
                            Coming Soon
                        </button>
                    )}
                </div>
            </div>
            <div className="w-full h-80 bg-black rounded-lg overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}>
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
  );
};