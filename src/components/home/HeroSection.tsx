
import React from 'react';
import { Shield, Lock, PoundSterling } from 'lucide-react';

const HeroSection = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-casino-background z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-casino-red/10 to-casino-yellow/10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/casino-bg-pattern.png')] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            <span className="text-balance">10 Best Online Casino Sites UK – {month} {year}</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 text-balance">
            Trusted UK-licensed casinos, expert reviews, bonuses, and fast payouts.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <FeatureTag icon={<Shield className="w-5 h-5 text-casino-red" />} text="UK Licensed" />
            <FeatureTag icon={<Lock className="w-5 h-5 text-casino-red" />} text="Secure" />
            <FeatureTag icon={<PoundSterling className="w-5 h-5 text-casino-red" />} text="Fast Withdrawals" />
          </div>

          <button className="casino-button-red text-lg px-8 py-3">
            Compare Casinos
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-casino-red/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-casino-yellow/10 rounded-full blur-3xl"></div>
    </section>
  );
};

const FeatureTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center bg-casino-card rounded-full px-4 py-2 border border-casino-gray">
    <span className="mr-2">{icon}</span>
    <span className="font-medium">{text}</span>
  </div>
);

export default HeroSection;
