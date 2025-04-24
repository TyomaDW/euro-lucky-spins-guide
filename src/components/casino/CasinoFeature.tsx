
import React from 'react';
import { Check } from 'lucide-react';

interface CasinoFeatureProps {
  text: string;
  highlighted?: boolean;
}

const CasinoFeature = ({ text, highlighted = false }: CasinoFeatureProps) => {
  return (
    <div className="flex items-center gap-2">
      <Check className={`w-4 h-4 ${highlighted ? 'text-casino-yellow' : 'text-casino-red'}`} />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

export default CasinoFeature;
