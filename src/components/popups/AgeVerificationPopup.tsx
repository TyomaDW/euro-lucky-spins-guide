
import React from 'react';

interface AgeVerificationPopupProps {
  onVerify: (verified: boolean) => void;
}

const AgeVerificationPopup: React.FC<AgeVerificationPopupProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-casino-card border border-casino-gray rounded-lg p-6 max-w-md w-full animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-casino-red bg-opacity-20 p-3">
            <span className="text-casino-red text-3xl">🔞</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Age Verification</h2>
        <p className="text-gray-300 mb-6 text-center">
          This website contains content related to gambling that is only suitable for people aged 18 and over.
          Please confirm that you are at least 18 years old.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="sm:flex-1 bg-casino-red text-white font-bold py-3 px-4 rounded hover:bg-opacity-90 transition-all"
            onClick={() => onVerify(true)}
          >
            I am 18 or over
          </button>
          <button
            className="sm:flex-1 bg-casino-gray text-white font-bold py-3 px-4 rounded hover:bg-opacity-90 transition-all"
            onClick={() => onVerify(false)}
          >
            I am under 18
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
