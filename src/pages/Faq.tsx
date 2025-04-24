
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about online casinos and our review process.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-casinoDark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">General Online Casino Questions</h2>
              
              <FaqSection />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16 text-white">About Our Casino Reviews</h2>
              
              <div className="space-y-6 mb-10">
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">How do you rank online casinos?</h3>
                  <p className="text-gray-300">
                    We evaluate casinos based on multiple criteria including licensing and security, game variety and quality,
                    bonus offers and terms, payment methods, customer support, mobile compatibility, and overall user experience.
                    Our team tests each casino thoroughly, and we also consider real player feedback and complaints when determining
                    rankings.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Are your casino reviews independent?</h3>
                  <p className="text-gray-300">
                    Yes, all our reviews are completely independent. While we do earn affiliate commissions from casinos when
                    players sign up through our links, this never influences our rankings or review content. We're committed
                    to providing honest, unbiased information to help UK players make informed decisions.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">How often do you update your casino reviews?</h3>
                  <p className="text-gray-300">
                    We review and update our casino listings and reviews on a regular basis, typically every 3-6 months.
                    However, if we receive information about significant changes at a casino (such as ownership changes,
                    licensing issues, or payment problems), we'll update our review immediately to reflect this new information.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Why do you only list UK-licensed casinos?</h3>
                  <p className="text-gray-300">
                    We exclusively recommend UK-licensed casinos because they provide the highest level of player protection
                    for British players. The UK Gambling Commission enforces strict standards for fair gaming, responsible
                    gambling tools, secure banking, and dispute resolution. UK players should only play at UK-licensed casinos
                    to ensure they're fully protected by UK gambling laws.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16 text-white">Bonuses and Promotions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Are casino bonuses worth claiming?</h3>
                  <p className="text-gray-300">
                    Casino bonuses can be worth claiming, but it depends on the specific terms and conditions. Always check
                    the wagering requirements, game restrictions, time limits, and maximum win/withdrawal caps. Some bonuses
                    offer genuine value, while others have such restrictive terms that they're not worth claiming. We highlight
                    the best value bonuses in our casino reviews.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">What are wagering requirements?</h3>
                  <p className="text-gray-300">
                    Wagering requirements (also called playthrough requirements) specify how many times you must bet a bonus
                    amount before you can withdraw any winnings. For example, a £10 bonus with 35x wagering would require you
                    to place a total of £350 in bets before you could withdraw any winnings from that bonus. Lower wagering
                    requirements are better for players.
                  </p>
                </div>
                
                <div className="pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">What are no-wagering bonuses?</h3>
                  <p className="text-gray-300">
                    No-wagering bonuses don't have any playthrough requirements, meaning you can withdraw any winnings immediately.
                    These bonuses are rare but highly valuable. They typically come in the form of free spins where any winnings
                    are paid in cash rather than bonus funds. We highlight casinos offering these player-friendly bonuses in
                    our reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ResponsibleGambling />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
