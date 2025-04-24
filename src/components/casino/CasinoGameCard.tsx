
import React from 'react';
import { ExternalLink } from 'lucide-react';
import CasinoRating from './CasinoRating';

interface CasinoGameCardProps {
  title: string;
  image: string;
  provider: string;
  rtp: number;
  rating: number;
  features: string[];
  playLink: string;
  className?: string;
}

const CasinoGameCard = ({
  title,
  image,
  provider,
  rtp,
  rating,
  features,
  playLink,
  className = ''
}: CasinoGameCardProps) => {
  return (
    <div className={`bg-casino-card border border-casino-gray rounded-lg overflow-hidden hover:border-casino-red transition-all duration-300 ${className}`}>
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <a 
            href={playLink}
            className="casino-button-red w-full text-center flex items-center justify-center gap-2"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Play Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute top-2 left-2 bg-casino-red text-white text-xs px-2 py-1 rounded">
          {provider}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <CasinoRating rating={rating} maxRating={5} />
        </div>
        
        <div className="flex justify-between items-center mb-3 text-sm">
          <span className="text-gray-300">RTP:</span>
          <span className="text-casino-yellow font-medium">{rtp}%</span>
        </div>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="text-xs bg-casino-gray rounded px-2 py-1 text-gray-300">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoGameCard;
