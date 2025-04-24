
import React from 'react';
import { Gift } from 'lucide-react';

interface BonusBadgeProps {
  text: string;
  className?: string;
  icon?: boolean;
}

const BonusBadge = ({ text, className = '', icon = true }: BonusBadgeProps) => {
  return (
    <div className={`inline-flex items-center bg-casino-yellow/90 text-black font-bold rounded-md px-3 py-1 ${className}`}>
      {icon && <Gift className="w-4 h-4 mr-1" />}
      <span>{text}</span>
    </div>
  );
};

export default BonusBadge;
