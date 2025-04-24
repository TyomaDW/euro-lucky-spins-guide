
import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import CasinoGameCard from './CasinoGameCard';

interface CasinoGame {
  id: string;
  title: string;
  image: string;
  provider: string;
  rtp: number;
  rating: number;
  features: string[];
  playLink: string;
  category: string;
}

interface CasinoGameGridProps {
  games: CasinoGame[];
  title?: string;
  description?: string;
}

const CasinoGameGrid = ({ 
  games, 
  title = "Featured Casino Games", 
  description = "Explore our selection of top casino games" 
}: CasinoGameGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(games.map(game => game.category)))];
  
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'all' || game.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search games or providers..."
              className="w-full bg-casino-gray border border-casino-gray text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-casino-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setSearchTerm('')}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="text-gray-400 shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                className={`whitespace-nowrap px-3 py-1 rounded-md text-sm ${
                  activeFilter === category
                    ? 'bg-casino-red text-white'
                    : 'bg-casino-gray text-gray-300 hover:bg-casino-gray/50'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <CasinoGameCard
                key={game.id}
                title={game.title}
                image={game.image}
                provider={game.provider}
                rtp={game.rtp}
                rating={game.rating}
                features={game.features}
                playLink={game.playLink}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 casino-card border border-casino-gray">
            <p className="text-gray-300">No games match your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CasinoGameGrid;
