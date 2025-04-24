
import React from 'react';
import CasinoList from '../casino/CasinoList';

const CasinoShowcase = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Top UK Casino Sites</h2>
        <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          We've tested hundreds of casinos to bring you the very best. All sites are licensed by the UK Gambling Commission.
        </p>
        
        <CasinoList />
        
        <div className="text-center mt-10">
          <button className="casino-button-yellow">
            View All UK Casinos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasinoShowcase;
