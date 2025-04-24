
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { Shield, Award, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted casino comparisons, expert reviews, and exclusive bonuses for UK players.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-casinoDark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Mission</h2>
              
              <p className="text-gray-300 mb-6">
                At euluckigiro, our mission is to provide UK players with accurate, up-to-date information about online casinos
                licensed by the UK Gambling Commission. We strive to be your trusted source for making informed decisions
                about where to play casino games online.
              </p>
              
              <p className="text-gray-300 mb-10">
                Founded by a team of gambling industry experts with decades of combined experience, we're committed to transparency,
                honesty, and promoting responsible gambling practices across all our content and recommendations.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">What Sets Us Apart</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Shield className="h-8 w-8 text-casinoYellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Rigorous Evaluation Process</h3>
                    <p className="text-gray-300">
                      Our team thoroughly evaluates each casino across 25+ criteria including licensing, game selection,
                      bonuses, banking options, customer support, and mobile compatibility. We regularly update our reviews
                      to reflect any changes in casino operations or reputation.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Award className="h-8 w-8 text-casinoYellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Independent Reviews</h3>
                    <p className="text-gray-300">
                      While we do earn affiliate commissions, our reviews remain independent and objective. We never accept payment
                      to influence our rankings or modify our opinions, and we're transparent about the criteria used to evaluate
                      each casino.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Check className="h-8 w-8 text-casinoYellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">UK-Focused Expertise</h3>
                    <p className="text-gray-300">
                      We specialize in the UK online gambling market and understand the specific needs, preferences, and
                      regulations that apply to UK players. All casinos we recommend are fully licensed by the UK Gambling
                      Commission.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Review Process</h2>
              
              <p className="text-gray-300 mb-6">
                Each casino listed on euluckigiro undergoes a comprehensive evaluation process. Our team creates accounts,
                deposits real money, plays games, tests customer service, and processes withdrawals to provide first-hand
                experience of what players can expect.
              </p>
              
              <p className="text-gray-300 mb-10">
                We continuously monitor industry news, player feedback, and casino updates to ensure our information remains
                current and accurate. If a casino falls below our standards, we don't hesitate to lower their rating or
                remove them from our recommended list.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Responsible Gambling</h2>
              
              <p className="text-gray-300 mb-6">
                We believe gambling should be enjoyable entertainment, not a way to make money. We're committed to promoting
                responsible gambling habits and providing resources for those who may need assistance with gambling-related issues.
              </p>
              
              <p className="text-gray-300 mb-6">
                All casinos we recommend must have robust responsible gambling tools and resources available to players,
                including deposit limits, time-out periods, self-exclusion options, and links to support organizations.
              </p>
            </div>
          </div>
        </section>
        
        <ResponsibleGambling />
      </main>
      <Footer />
    </div>
  );
};

export default About;
