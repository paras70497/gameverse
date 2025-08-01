import React from 'react';
import type { Game } from '../types';
import { StarIcon, HeartIcon } from './icons';

type GameCardProps = {
  game: Game;
  favorites: number[];
  toggleFavorite: (gameId: number) => void;
};

export const GameCard: React.FC<GameCardProps> = ({ game, favorites, toggleFavorite }) => {
  const isFavorite = favorites.includes(game.id);

  return (
    <div className="group relative bg-white dark:bg-slate-800/40 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 border border-gray-200 dark:border-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button onClick={() => toggleFavorite(game.id)} className="p-2 rounded-full bg-black/50 hover:bg-pink-500 text-white transition-colors">
                <HeartIcon className={`w-5 h-5 ${isFavorite ? 'text-pink-500' : 'text-white'}`}/>
            </button>
        </div>
      <div className="relative h-40">
        <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {game.isNew && (
                <span className="px-2 py-0.5 text-xs font-bold text-black uppercase bg-gradient-to-r from-red-500 to-orange-400 rounded-full">NEW!</span>
            )}
            {game.isMultiplayer && (
                 <span className="px-2 py-0.5 text-xs font-bold text-white uppercase bg-blue-600 rounded-full">2-PLAYER</span>
            )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
            {game.path ? (
                <a 
                    href={game.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-2 text-md font-bold text-white bg-cyan-500/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 backdrop-blur-sm"
                >
                    Play
                </a>
            ) : (
                <div className="px-8 py-2 text-md font-bold text-white bg-gray-500/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 backdrop-blur-sm cursor-not-allowed">
                    Soon
                </div>
            )}
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-slate-800/20">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{game.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 h-10 mt-1 overflow-hidden">{game.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 rounded-full">
            {game.category}
          </span>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">{game.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};