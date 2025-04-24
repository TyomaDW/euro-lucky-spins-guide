
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AgeVerificationPopup from '../popups/AgeVerificationPopup';
import CookieConsentPopup from '../popups/CookieConsentPopup';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setShowAgeVerification(true);
    }

    // Check if user has already set cookie preferences
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAgeVerification = (verified: boolean) => {
    if (verified) {
      localStorage.setItem('ageVerified', 'true');
      setShowAgeVerification(false);
    } else {
      // Redirect to an age restriction page or external site
      window.location.href = 'https://www.begambleaware.org/';
    }
  };

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-casino-background text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {showAgeVerification && (
        <AgeVerificationPopup onVerify={handleAgeVerification} />
      )}
      
      {showCookieConsent && (
        <CookieConsentPopup onConsent={handleCookieConsent} />
      )}
    </div>
  );
};

export default MainLayout;
