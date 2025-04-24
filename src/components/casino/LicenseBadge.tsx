
import React from 'react';
import { Shield } from 'lucide-react';

interface LicenseBadgeProps {
  text: string;
  variant?: 'ukgc' | 'mga' | 'gibraltar' | 'default';
}

const LicenseBadge = ({ text, variant = 'default' }: LicenseBadgeProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'ukgc':
        return 'bg-blue-900/50 border-blue-800';
      case 'mga':
        return 'bg-red-900/50 border-red-800';
      case 'gibraltar':
        return 'bg-green-900/50 border-green-800';
      default:
        return 'bg-casino-card border-casino-gray';
    }
  };

  return (
    <div className={`inline-flex items-center border text-white text-xs px-2 py-1 rounded ${getVariantStyles()}`}>
      <Shield className="w-3 h-3 mr-1" />
      {text}
    </div>
  );
};

export default LicenseBadge;
