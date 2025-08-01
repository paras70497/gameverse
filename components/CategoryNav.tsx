
import React, { useState } from 'react';
import { FireIcon, ArcadeIcon, PuzzleIcon, PlatformerIcon, SurvivalIcon } from './icons';

const categories = [
  { name: 'All Games', icon: FireIcon, color: 'text-orange-400' },
  { name: 'Arcade', icon: ArcadeIcon, color: 'text-pink-400' },
  { name: 'Puzzle', icon: PuzzleIcon, color: 'text-purple-400' },
  { name: 'Platformer', icon: PlatformerIcon, color: 'text-green-400' },
  { name: 'Survival', icon: SurvivalIcon, color: 'text-red-400' },
];

export const CategoryNav: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Games');
    
    return (
        <div className="relative my-6">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ filter: 'blur(2px)' }}></div>
            <nav className="relative flex justify-center items-center backdrop-blur-sm">
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-[#0D0E1B] px-4">
                {categories.map((category) => {
                    const isActive = activeCategory === category.name;
                    return (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                ${isActive 
                                    ? 'bg-cyan-500 text-white shadow-lg' 
                                    : 'text-gray-500 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
                                }
                            `}
                        >
                            <category.icon className={`w-5 h-5 ${isActive ? 'text-white' : category.color}`} />
                            <span>{category.name}</span>
                        </button>
                    )
                })}
                </div>
            </nav>
        </div>
    );
}