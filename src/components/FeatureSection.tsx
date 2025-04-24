
import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  const features = [
    {
      title: 'The Best Online Casino Games',
      description: 'Discover the top games across UK online casinos, from slots to table games and live dealer experiences.',
      link: '/casino-games'
    },
    {
      title: 'Roulette at an Online Casino',
      description: 'Learn about the different roulette variations available online and strategies to improve your gameplay.',
      link: '/roulette'
    },
    {
      title: 'Online Slots',
      description: 'Explore the exciting world of online slots with thousands of themes, jackpots, and bonus features.',
      link: '/slots'
    },
    {
      title: 'Live Casino Online',
      description: 'Experience the thrill of a real casino with live dealers streaming games in real-time to your device.',
      link: '/live-casino'
    },
    {
      title: 'How We Determined the Rankings',
      description: 'Learn about our comprehensive evaluation process for rating and ranking the best UK online casinos.',
      link: '/ranking-methodology'
    },
    {
      title: 'Latest Casino News',
      description: 'Stay updated with the latest news, promotions, and developments in the UK online casino industry.',
      link: '/news'
    }
  ];

  return (
    <section className="py-16 bg-casinoDark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
          Online Casino Guides & Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="feature-card group">
              <h3 className="text-xl font-semibold mb-2 text-casinoYellow group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {feature.description}
              </p>
              <div className="text-casinoYellow text-sm font-medium group-hover:text-white transition-colors duration-300">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
