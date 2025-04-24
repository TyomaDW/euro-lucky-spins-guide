
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CasinoCard from './CasinoCard';

interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  bonusAmount?: string;
  features: string[];
  withdrawalTime: string;
  license: string;
  licenseType?: 'ukgc' | 'mga' | 'gibraltar' | 'default';
  ctaText?: string;
  ctaLink?: string;
}

interface CasinoComparisonProps {
  casinos: Casino[];
  title?: string;
  description?: string;
}

const CasinoComparison = ({ 
  casinos, 
  title = "Top UK Casino Sites", 
  description = "Compare the best UK licensed online casinos" 
}: CasinoComparisonProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCasinos = casinos.filter(casino => 
    casino.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    casino.features.some(feature => 
      feature.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by casino name or feature..."
            className="w-full bg-casino-gray border border-casino-gray text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-casino-red"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="space-y-4">
          {filteredCasinos.length > 0 ? (
            filteredCasinos.map((casino) => (
              <CasinoCard
                key={casino.id}
                name={casino.name}
                logo={casino.logo}
                rating={casino.rating}
                bonus={casino.bonus}
                bonusAmount={casino.bonusAmount}
                features={casino.features}
                withdrawalTime={casino.withdrawalTime}
                license={casino.license}
                licenseType={casino.licenseType}
                ctaText={casino.ctaText}
                ctaLink={casino.ctaLink}
              />
            ))
          ) : (
            <div className="text-center py-12 casino-card border border-casino-gray">
              <p className="text-gray-300">No casinos match your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasinoComparison;
