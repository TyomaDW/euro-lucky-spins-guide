
import React from 'react';
import { Link } from 'react-router-dom';

interface CookieConsentPopupProps {
  onConsent: (accepted: boolean) => void;
}

const CookieConsentPopup: React.FC<CookieConsentPopupProps> = ({ onConsent }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-casino-card border-t border-casino-gray p-4 shadow-lg animate-slide-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and
            analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            Read our <Link to="/cookie-policy" className="text-casino-yellow hover:underline">Cookie Policy</Link> for more information.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            className="px-4 py-2 bg-casino-gray text-white rounded hover:bg-opacity-90 transition-colors"
            onClick={() => onConsent(false)}
          >
            Decline
          </button>
          <button
            className="px-4 py-2 bg-casino-red text-white rounded hover:bg-opacity-90 transition-colors"
            onClick={() => onConsent(true)}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
