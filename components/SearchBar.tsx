
import React from 'react';

export const SearchBar: React.FC = () => {
    return (
        <div className="relative mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <input 
                type="text"
                placeholder="Search epic games..."
                className="relative w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-lg py-3 px-5 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
        </div>
    );
}