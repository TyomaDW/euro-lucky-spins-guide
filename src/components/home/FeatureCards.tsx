
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dices, 
  CircleDollarSign, 
  Gamepad2, 
  ShieldCheck, 
  UserCheck, 
  PoundSterling 
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Casino Games",
    description: "Explore the best online slots, table games, and live dealer experiences.",
    icon: <Dices className="h-10 w-10 text-casino-red" />,
    link: "/guides/casino-games"
  },
  {
    id: 2,
    title: "Bonus Offers",
    description: "Exclusive welcome bonuses and promotions for UK players.",
    icon: <CircleDollarSign className="h-10 w-10 text-casino-red" />,
    link: "/guides/bonus-offers"
  },
  {
    id: 3,
    title: "Slots Guide",
    description: "Tips and strategies for playing online slot machines.",
    icon: <Gamepad2 className="h-10 w-10 text-casino-red" />,
    link: "/guides/slots-guide"
  },
  {
    id: 4,
    title: "Safe Gambling",
    description: "Learn about responsible gambling practices and tools.",
    icon: <ShieldCheck className="h-10 w-10 text-casino-red" />,
    link: "/guides/safe-gambling"
  },
  {
    id: 5,
    title: "UK Regulations",
    description: "Everything you need to know about UK gambling laws and licenses.",
    icon: <UserCheck className="h-10 w-10 text-casino-red" />,
    link: "/guides/uk-regulations"
  },
  {
    id: 6,
    title: "Payment Methods",
    description: "Secure banking options for UK players with fast withdrawals.",
    icon: <PoundSterling className="h-10 w-10 text-casino-red" />,
    link: "/guides/payment-methods"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Casino Guides & Resources</h2>
        <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          Everything you need to know about online casinos in the UK
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={feature.id}
              className="casino-card p-6 hover:translate-y-[-5px] transition-all duration-300 animate-fade-in opacity-0 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-casino-red/20 to-casino-yellow/5 rounded-lg p-3 mb-4 w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              
              <p className="text-gray-400 mb-4">{feature.description}</p>
              
              <div className="mt-auto flex items-center text-casino-yellow hover:text-casino-red transition-colors font-medium">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
