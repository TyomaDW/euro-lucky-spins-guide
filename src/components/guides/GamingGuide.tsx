
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface GamingGuideProps {
  title: string;
  description: string;
  image: string;
  steps: {
    title: string;
    content: string;
  }[];
  tips?: string[];
}

const GamingGuide = ({ title, description, image, steps, tips }: GamingGuideProps) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      
      {image && (
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      )}
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-casino-card border-casino-gray">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-casino-red mr-3 text-white">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-gray-300">{step.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {tips && tips.length > 0 && (
        <Card className="bg-casino-card border-casino-gray mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-casino-yellow">Pro Tips</h3>
            <ul className="space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-casino-red mt-0.5 shrink-0" />
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GamingGuide;
