
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useToast } from '@/hooks/use-toast';

const ResponsibleGambling = () => {
  const { toast } = useToast();
  
  const responsibleGamblingLogos = [
    { 
      src: '/lovable-uploads/77adae84-5b61-46b3-9cdd-65eb12afb2fc.png', 
      alt: '18+ Age Restriction', 
      href: 'https://www.begambleaware.org/safer-gambling/know-your-limits',
      description: 'Age verification is mandatory for all UK gambling sites to ensure users are over 18'
    },
    { 
      src: '/lovable-uploads/8b533ad8-d9ad-44c1-a90e-0e9b5fd29996.png', 
      alt: 'GambleAware', 
      href: 'https://www.begambleaware.org/',
      description: 'GambleAware provides information and resources to help people make informed decisions about their gambling'
    },
    { 
      src: '/lovable-uploads/390b0d4b-2a2f-4943-b0ed-120118525a65.png', 
      alt: 'Gambling Commission', 
      href: 'https://www.gamblingcommission.gov.uk/',
      description: 'The UK Gambling Commission regulates commercial gambling in Great Britain'
    },
    { 
      src: '/lovable-uploads/2db26133-c87b-428d-b3df-282787919d59.png', 
      alt: 'GamCare', 
      href: 'https://www.gamcare.org.uk/',
      description: 'GamCare offers free information, support and counselling for problem gamblers in the UK'
    },
    { 
      src: '/lovable-uploads/0bc6015d-08d9-40bc-a786-0e16ce1a3340.png', 
      alt: 'GBGA', 
      href: 'https://www.gbga.im/',
      description: 'The Gibraltar Betting and Gaming Association represents online betting and gaming operators'
    },
    { 
      src: '/lovable-uploads/9eef926b-2938-497d-9a17-ec322770c7e2.png', 
      alt: 'Gordon Moody', 
      href: 'https://www.gordonmoody.org.uk/',
      description: 'Gordon Moody provides treatment for those with severe gambling addiction'
    },
    { 
      src: '/lovable-uploads/9d40b433-9609-4a42-9d47-7ec791b5119a.png', 
      alt: 'IBAS', 
      href: 'https://www.ibas.org.uk/',
      description: 'IBAS is an independent adjudication service for disputes between gambling operators and customers'
    }
  ];

  const handleResourceClick = (name: string) => {
    toast({
      title: `Visiting ${name}`,
      description: "Opening responsible gambling resource in a new tab",
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-casino-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Responsible Gambling</h2>
        
        <div className="casino-card max-w-4xl mx-auto p-6 border-2 border-casino-gray">
          <div className="text-center mb-6">
            <p className="text-gray-300 mb-4">
              We promote responsible gambling and only recommend licensed UK casinos. Always gamble responsibly and be aware of the risks involved.
            </p>
            <p className="text-gray-300 mb-6">
              If you feel you may have a gambling problem, please visit these organizations for help:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
            {responsibleGamblingLogos.map((logo) => (
              <HoverCard key={logo.alt} openDelay={300} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <a 
                    href={logo.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full h-16 flex justify-center items-center"
                    onClick={() => handleResourceClick(logo.alt)}
                  >
                    <img 
                      src={logo.src}
                      alt={logo.alt} 
                      className="max-h-10 w-auto object-contain" 
                    />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-casino-card text-white border-casino-gray">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-casino-yellow">{logo.alt}</h4>
                      <p className="text-xs text-gray-300">{logo.description}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-4 border-t border-casino-gray">
            <p className="text-sm text-gray-400">
              18+ | Terms & Conditions Apply | Please Gamble Responsibly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleGambling;
