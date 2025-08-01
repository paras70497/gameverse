import React, { useState, useRef, useEffect } from 'react';
import { GamepadIcon, HeartIcon, BellIcon, MoonIcon, SunIcon } from './icons';
import type { Game } from '../types';

type HeaderProps = {
  user: string;
  onLogout: () => void;
  theme: string;
  setTheme: (theme: string) => void;
  favorites: number[];
  games: Game[];
};

// Hook to detect clicks outside of a specified element
const useOnClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};


export const Header: React.FC<HeaderProps> = ({ user, onLogout, theme, setTheme, favorites, games }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(profileRef, () => activeDropdown === 'profile' && setActiveDropdown(null));
  useOnClickOutside(favoritesRef, () => activeDropdown === 'favorites' && setActiveDropdown(null));
  useOnClickOutside(notificationsRef, () => activeDropdown === 'notifications' && setActiveDropdown(null));

  const favoritedGames = games.filter(game => favorites.includes(game.id));
  const mockNotifications = [
    { id: 1, text: "Pixel Punisher has been updated!", time: "5m ago" },
    { id: 2, text: "New friend request from 'GamerX'.", time: "1h ago" },
    { id: 3, text: "Welcome to GameVerse!", time: "1d ago" },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-cyan-500/20">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-lg" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'}}>
            <GamepadIcon className="w-8 h-8 text-cyan-400" />
        </div>
        <h1 className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
          Game<span className="text-cyan-400">Verse</span>
        </h1>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-widest border-l-2 border-gray-300 dark:border-gray-600 pl-4">
          EPIC GAMES PORTAL
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Welcome back, <span className="font-bold text-cyan-400">{user}</span>!
        </div>
        <img
          src={`https://i.pravatar.cc/40?u=${user}`}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-cyan-400"
        />
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button onClick={() => handleDropdownToggle('profile')} className="px-4 py-2 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-md transition-all duration-300">
            Profile
          </button>
          {activeDropdown === 'profile' && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">Settings</a>
              <button onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">Logout</button>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
            {/* Favorites Dropdown */}
            <div className="relative" ref={favoritesRef}>
              <button onClick={() => handleDropdownToggle('favorites')} className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/70 dark:hover:bg-slate-700/70 transition-colors">
                  <HeartIcon className="w-5 h-5 text-pink-500" />
              </button>
              {activeDropdown === 'favorites' && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 z-20">
                  <div className="p-3 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Favorites</h4>
                  </div>
                  {favoritedGames.length > 0 ? (
                    <ul className="py-1 max-h-64 overflow-y-auto">
                      {favoritedGames.map(game => (
                        <li key={game.id}>
                          <a href={game.path || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                            <img src={game.imageUrl} className="w-10 h-10 rounded-md object-cover" />
                            <span className="font-semibold">{game.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="p-4 text-sm text-gray-500">No favorite games yet.</p>
                  )}
                </div>
              )}
            </div>
             {/* Notifications Dropdown */}
            <div className="relative" ref={notificationsRef}>
              <button onClick={() => handleDropdownToggle('notifications')} className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/70 dark:hover:bg-slate-700/70 transition-colors">
                  <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
              </button>
               {activeDropdown === 'notifications' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 z-20">
                   <div className="p-3 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Notifications</h4>
                  </div>
                  <ul className="py-1 max-h-64 overflow-y-auto">
                      {mockNotifications.map(notif => (
                        <li key={notif.id} className="border-b border-gray-100 dark:border-slate-700/50 last:border-b-0">
                          <a href="#" className="block px-3 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                            <p>{notif.text}</p>
                            <p className="text-xs text-cyan-500 mt-1">{notif.time}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                </div>
              )}
            </div>
             {/* Theme Toggle */}
             <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/70 dark:hover:bg-slate-700/70 transition-colors">
                {theme === 'dark' ? (
                    <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                    <MoonIcon className="w-5 h-5 text-gray-500" />
                )}
            </button>
        </div>
      </div>
    </header>
  );
};
