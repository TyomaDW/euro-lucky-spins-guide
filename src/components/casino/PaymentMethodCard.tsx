
import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PaymentMethodCardProps {
  name: string;
  logo: string;
  depositTime: string;
  withdrawalTime: string;
  minDeposit: string;
  minWithdrawal: string;
  fees?: string;
  notes?: string[];
}

const PaymentMethodCard = ({
  name,
  logo,
  depositTime,
  withdrawalTime,
  minDeposit,
  minWithdrawal,
  fees = 'None',
  notes = []
}: PaymentMethodCardProps) => {
  return (
    <Card className="bg-casino-card border-casino-gray overflow-hidden">
      <div className="bg-white p-4 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-12 object-contain"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Deposit Time:</span>
            <span className="text-gray-200">{depositTime}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Withdrawal Time:</span>
            <span className="text-gray-200 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {withdrawalTime}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Min Deposit:</span>
            <span className="text-gray-200">{minDeposit}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Min Withdrawal:</span>
            <span className="text-gray-200">{minWithdrawal}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Fees:</span>
            <span className="text-gray-200">{fees}</span>
          </div>
        </div>
        
        {notes.length > 0 && (
          <div className="mt-3 pt-3 border-t border-casino-gray">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-casino-yellow shrink-0 mt-0.5" />
              <div>
                {notes.map((note, index) => (
                  <p key={index} className="text-xs text-gray-300">{note}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;
