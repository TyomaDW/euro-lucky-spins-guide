
import React from 'react';
import { Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-GB', { month: 'long' });
  const year = currentDate.getFullYear();
  
  return (
    <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            10 Best Online Casino Sites UK – {month} {year}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            UK's top regulated & trusted online casinos, expert reviews, exclusive bonuses, and secure withdrawals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center space-x-2 text-casinoYellow">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm md:text-base">🇬🇧 UK Licensed</span>
            </div>
            
            <div className="flex items-center space-x-2 text-casinoYellow">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm md:text-base">🔒 Secure & Trusted</span>
            </div>
            
            <div className="flex items-center space-x-2 text-casinoYellow">
              <Calendar className="h-5 w-5" />
              <span className="text-sm md:text-base">💷 Fast Withdrawals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
