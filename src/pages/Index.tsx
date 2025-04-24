
import React from 'react';
import Hero from '@/components/Hero';
import CasinoShowcase from '@/components/CasinoShowcase';
import FaqSection from '@/components/FaqSection';
import FeatureSection from '@/components/FeatureSection';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AgeVerification from '@/components/AgeVerification';
import CookieConsent from '@/components/CookieConsent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerification />
      <CookieConsent />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CasinoShowcase />
        <FaqSection />
        <FeatureSection />
        <ResponsibleGambling />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
