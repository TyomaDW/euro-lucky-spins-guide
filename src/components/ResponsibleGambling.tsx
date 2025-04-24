
import React from 'react';

const ResponsibleGambling = () => {
  return (
    <section className="py-16 bg-casinoDark-tertiary">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Play Safely & Responsibly</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          <a href="https://www.gambleaware.org/home/" target="_blank" rel="noopener noreferrer">
            <img src="/images/compliance/gambleaware.png" alt="GambleAware" className="h-12 w-auto" />
          </a>
          <img src="/images/compliance/18-plus.png" alt="18+" className="h-12 w-auto" />
          <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
            <img src="/images/compliance/gordon-moody.png" alt="Gordon Moody" className="h-12 w-auto" />
          </a>
          <a href="https://www.gbga.gi/" target="_blank" rel="noopener noreferrer">
            <img src="/images/compliance/gbga.png" alt="GBGA" className="h-12 w-auto" />
          </a>
          <a href="https://ibas-uk.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/compliance/ibas.png" alt="IBAS" className="h-12 w-auto" />
          </a>
          <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
            <img src="https://slotdomempire.eu/lovable-uploads/3d8b70d1-4c47-4fdd-9d1d-58e34620ef74.png" alt="GamCare" className="h-12 w-auto" />
          </a>
          <a href="https://www.gamblingcommission.gov.uk/" target="_blank" rel="noopener noreferrer">
            <img src="https://slotdomempire.eu/lovable-uploads/b733b72a-5d80-40c0-aa7f-d611dcff9927.png" alt="Gambling Commission" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGambling;
