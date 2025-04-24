
import React from 'react';
import { Star } from 'lucide-react';
import { casinos } from '../../data/casinoData';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const CasinoList = () => {
  return (
    <div className="space-y-4">
      {casinos.map((casino) => (
        <Card key={casino.id} className="casino-item relative bg-white dark:bg-casino-card border-casino-yellow/20">
          {casino.tag && (
            <Badge className="absolute top-0 left-0 z-10 rounded-none rounded-br-lg bg-casino-red text-white">
              {casino.tag}
            </Badge>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
            <div className="md:col-span-4 flex items-center justify-center md:justify-start space-x-4">
              <div className="border border-casino-yellow/20 rounded-full w-12 h-12 flex items-center justify-center text-xl font-semibold">
                {casino.id}
              </div>
              <a href={casino.link} className="flex-shrink-0">
                <img src={casino.logo} alt={casino.name} className="max-w-[120px] h-auto" />
              </a>
            </div>

            <div className="md:col-span-2 space-y-1">
              <p className="font-bold text-gray-700 dark:text-gray-200">{casino.bonus}</p>
              <div className="text-green-500 text-xs">New player offer - T&Cs apply</div>
              <div className="text-xs text-gray-500">18+, Begambleaware.org</div>
            </div>

            <div className="md:col-span-2 space-y-1">
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-500">({casino.votes.toLocaleString()} Votes)</p>
            </div>

            <div className="md:col-span-2 text-center">
              <div className="inline-flex flex-col items-center">
                <span className="text-2xl font-bold text-casino-red">{casino.score}</span>
                <span className="text-xs text-gray-500">Our Score</span>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col items-center gap-2">
              <a
                href={casino.link}
                className="text-center w-full bg-casino-red hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-full transition"
              >
                GET BONUS
              </a>
              <p className="font-bold text-xs text-gray-500">Min. Deposit - £{casino.minDeposit}</p>
            </div>
          </div>

          <div className="px-4 pb-4 text-[10px] text-gray-600">
            {casino.disclaimer}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CasinoList;
