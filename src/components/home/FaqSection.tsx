
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are online casinos safe?",
    answer: "Yes, online casinos licensed by the UK Gambling Commission are safe to use. They must comply with strict regulations regarding fair gameplay, security of funds, and responsible gambling measures. Always check for a valid UKGC license before playing."
  },
  {
    question: "How do I know if a casino is licensed in the UK?",
    answer: "Licensed UK casinos will display the UK Gambling Commission logo and their license number at the bottom of their website. You can verify this information on the Gambling Commission's website. All casinos we recommend are fully licensed in the UK."
  },
  {
    question: "What's the best online casino in the UK?",
    answer: "The 'best' casino depends on your preferences. Some excel at slots, others at table games or live dealer options. Our rankings consider game variety, bonuses, customer support, mobile experience, and payout speed to help you find the right fit."
  },
  {
    question: "How do casino bonuses work?",
    answer: "Casino bonuses typically come with wagering requirements that specify how many times you need to bet the bonus amount before withdrawing winnings. Always read the terms and conditions to understand the requirements, time limits, and game restrictions."
  },
  {
    question: "Are online casino winnings taxable in the UK?",
    answer: "No, gambling winnings in the UK are not subject to tax. The UK government taxes gambling operators rather than individual players, so you get to keep 100% of your winnings."
  },
  {
    question: "What payment methods can I use at UK online casinos?",
    answer: "UK online casinos typically accept debit cards, e-wallets like PayPal, Skrill, and Neteller, prepaid cards, bank transfers, and sometimes pay-by-phone options. Credit cards are no longer allowed for gambling in the UK since April 2020."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Frequently Asked Questions</h2>
        <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          Get answers to common questions about online casinos in the UK
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="casino-card border border-casino-gray overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-casino-red text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8">
            <a href="/faq" className="casino-button-yellow">
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
