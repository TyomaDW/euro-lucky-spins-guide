
import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const BonusCalculator = () => {
  const [depositAmount, setDepositAmount] = useState(100);
  const [bonusPercentage, setBonusPercentage] = useState(100);
  const [wagering, setWagering] = useState(35);
  const [result, setResult] = useState({
    bonusAmount: 0,
    totalPlayable: 0,
    wageringRequirement: 0
  });

  useEffect(() => {
    const bonusAmount = depositAmount * (bonusPercentage / 100);
    const totalPlayable = depositAmount + bonusAmount;
    const wageringRequirement = bonusAmount * wagering;
    
    setResult({
      bonusAmount,
      totalPlayable,
      wageringRequirement
    });
  }, [depositAmount, bonusPercentage, wagering]);

  return (
    <Card className="bg-casino-card border-casino-gray">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-casino-yellow" />
          <h3 className="text-xl font-bold text-white">Casino Bonus Calculator</h3>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-white">Deposit Amount</label>
              <span className="text-casino-yellow font-bold">£{depositAmount}</span>
            </div>
            <Slider 
              value={[depositAmount]} 
              min={10} 
              max={1000}
              step={10}
              onValueChange={(value) => setDepositAmount(value[0])}
              className="z-0"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>£10</span>
              <span>£1000</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-white">Bonus Percentage</label>
              <span className="text-casino-yellow font-bold">{bonusPercentage}%</span>
            </div>
            <Slider 
              value={[bonusPercentage]} 
              min={10} 
              max={500}
              step={5}
              onValueChange={(value) => setBonusPercentage(value[0])}
              className="z-0"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>10%</span>
              <span>500%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <label className="text-white">Wagering Requirement</label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-casino-background border-casino-gray text-white">
                      The number of times you need to bet your bonus amount before withdrawing.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-casino-yellow font-bold">{wagering}x</span>
            </div>
            <Slider 
              value={[wagering]} 
              min={0} 
              max={70}
              step={1}
              onValueChange={(value) => setWagering(value[0])}
              className="z-0"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0x</span>
              <span>70x</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-casino-gray">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Bonus Amount</p>
              <p className="text-casino-yellow font-bold text-xl">£{result.bonusAmount.toFixed(2)}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Total Playable</p>
              <p className="text-casino-yellow font-bold text-xl">£{result.totalPlayable.toFixed(2)}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Wagering Required</p>
              <p className="text-casino-yellow font-bold text-xl">£{result.wageringRequirement.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BonusCalculator;
