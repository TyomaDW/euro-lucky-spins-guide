
import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CasinoRating from './CasinoRating';
import BonusBadge from './BonusBadge';
import CasinoFeature from './CasinoFeature';
import LicenseBadge from './LicenseBadge';

interface CasinoCardProps {
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

const CasinoCard = ({
  name,
  logo,
  rating,
  bonus,
  bonusAmount,
  features,
  withdrawalTime,
  license,
  licenseType = 'ukgc',
  ctaText = 'Visit Casino',
  ctaLink = '#'
}: CasinoCardProps) => {
  return (
    <Card className="bg-casino-card border-casino-gray hover:border-casino-red transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Logo */}
          <div className="md:col-span-1 bg-white p-6 flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="max-w-full max-h-24 object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="md:col-span-3 p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <CasinoRating rating={rating} />
            </div>
            
            <BonusBadge text={bonus} className="mb-3" />
            
            {bonusAmount && (
              <p className="text-casino-yellow font-bold text-lg mb-3">{bonusAmount}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
              {features.map((feature, index) => (
                <CasinoFeature 
                  key={index} 
                  text={feature} 
                  highlighted={index === 0}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-casino-yellow mr-2" />
                <span className="text-gray-300">{withdrawalTime}</span>
              </div>
              
              <LicenseBadge text={license} variant={licenseType} />
            </div>
          </div>
          
          {/* CTA */}
          <div className="md:col-span-1 bg-casino-background/50 p-6 flex flex-col justify-center items-center">
            <a 
              href={ctaLink}
              className="casino-button-red w-full text-center flex items-center justify-center gap-2 mb-3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {ctaText}
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <a 
              href="#" 
              className="text-casino-yellow text-sm flex items-center hover:text-white transition-colors"
            >
              Read Review
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CasinoCard;
