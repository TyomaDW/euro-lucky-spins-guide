
import React, { useEffect, useState } from 'react';

const AgeVerification = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already verified their age
    const hasVerified = localStorage.getItem('age-verified');
    
    if (!hasVerified) {
      setIsVisible(true);
    }
  }, []);
  
  const confirmAge = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVisible(false);
  };
  
  const rejectAge = () => {
    // Redirect to Google or another safe site
    window.location.href = 'https://www.google.com';
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
      <div className="bg-casinoDark-secondary border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4 animate-fade-in">
        <div className="text-center mb-6">
          <div className="text-casinoRed text-5xl font-bold mb-2">18+</div>
          <h3 className="text-xl font-bold text-white">Age Verification</h3>
        </div>
        
        <p className="text-gray-300 mb-6 text-center">
          This website contains information about online gambling. 
          You must be at least 18 years old to access this site.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={confirmAge}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
          >
            I'm 18 or older
          </button>
          
          <button
            onClick={rejectAge}
            className="bg-casinoRed hover:bg-casinoRed-hover text-white font-medium py-2 px-6 rounded transition-colors duration-200"
          >
            Leave Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
