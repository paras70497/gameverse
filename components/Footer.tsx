
import React from 'react';
import { GamepadIcon } from './icons';

export const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 border-t border-gray-200 dark:border-cyan-500/20 py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <GamepadIcon className="w-6 h-6 text-cyan-400" />
                     <h1 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white">
                        Game<span className="text-cyan-400">Verse</span>
                    </h1>
                </div>
                <div className="flex space-x-6 text-sm font-semibold">
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors">Quick Links</a>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors">Categories</a>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors">Community</a>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} GameVerse. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}