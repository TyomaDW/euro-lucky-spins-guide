
import React, { useEffect, useState } from 'react';
import { toast } from "@/components/ui/sonner";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('cookie-consent');
    
    // Show banner after a short delay if no choice has been made
    if (!cookieChoice) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    toast.success("Thank you! Your cookie preferences have been saved.");
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    toast.success("Cookies declined. Only essential cookies will be used.");
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h4 className="text-white font-semibold mb-1">We Value Your Privacy</h4>
            <p className="text-gray-400 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          
          <div className="flex flex-shrink-0 space-x-3">
            <button
              onClick={declineCookies}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm transition-colors duration-200"
            >
              Decline
            </button>
            
            <button
              onClick={acceptCookies}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm transition-colors duration-200"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
