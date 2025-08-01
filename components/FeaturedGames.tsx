
import React from 'react';
import type { Game } from '../types';
import { GameCard } from './GameCard';

type FeaturedGamesProps = {
  games: Game[];
  favorites: number[];
  toggleFavorite: (gameId: number) => void;
};

export const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games, favorites, toggleFavorite }) => {
  return (
    <section className="py-12">
      <div className="relative text-center mb-10">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ filter: 'blur(2px)' }}></div>
        <h2 className="relative inline-block bg-gray-50 dark:bg-[#0D0E1B] px-4 text-3xl font-bold text-gray-900 dark:text-white tracking-wider">
            Featured <span className="text-cyan-400">Games</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} favorites={favorites} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </section>
  );
};