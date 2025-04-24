
import React from 'react';
import { Star } from 'lucide-react';

interface CasinoRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const CasinoRating = ({ rating, maxRating = 5, className = '' }: CasinoRatingProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? 'text-casino-yellow fill-casino-yellow'
              : 'text-gray-400'
          }`}
        />
      ))}
      <span className="ml-2 text-white font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

export default CasinoRating;
