import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SearchBar } from './components/SearchBar';
import { FeaturedBanner } from './components/FeaturedBanner';
import { FeaturedGames } from './components/FeaturedGames';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { games } from './constants';
import type { Game } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Initialize user from local storage
  useEffect(() => {
    const savedUser = localStorage.getItem('gameVerseUser');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);
  
  // Load favorites for the current user
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`favoriteGames_${user}`);
      setFavorites(saved ? JSON.parse(saved) : []);
    } else {
      setFavorites([]); // Clear favorites if no user
    }
  }, [user]);

  // Save theme to local storage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  // Save favorites when they change for a specific user
  useEffect(() => {
    if (user) {
      localStorage.setItem(`favoriteGames_${user}`, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const handleLogin = (username: string) => {
    if (username.trim()) {
        setUser(username);
        localStorage.setItem('gameVerseUser', username);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('gameVerseUser');
  };

  const toggleFavorite = (gameId: number) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId) 
        : [...prev, gameId]
    );
  };

  if (!user) {
    return <LoginModal onLogin={handleLogin} />;
  }

  const featuredGame = games.find(g => g.isFeatured) as Game;
  const otherGames = games.filter(g => !g.isFeatured);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-[#0D0E1B] text-gray-800 dark:text-gray-200 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Background glowing blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50 dark:opacity-50 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl opacity-50 dark:opacity-50 animate-pulse animation-delay-4000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl opacity-40 dark:opacity-40 animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header user={user} onLogout={handleLogout} theme={theme} setTheme={setTheme} favorites={favorites} games={games} />
        <CategoryNav />
        
        <main className="py-8">
          <SearchBar />
          <FeaturedBanner game={featuredGame} />
          <FeaturedGames games={otherGames} favorites={favorites} toggleFavorite={toggleFavorite} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
