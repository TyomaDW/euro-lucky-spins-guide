
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is an online casino?',
      answer: "An online casino is a digital platform that allows users to play casino games and place wagers over the internet. These platforms offer many of the same games found in traditional brick-and-mortar casinos, including slots, table games like blackjack and roulette, video poker, and in many cases, live dealer games streamed in real-time."
    },
    {
      question: 'How do online casinos work?',
      answer: "Online casinos work by using random number generator (RNG) software to ensure fair and unpredictable game outcomes. Players create accounts, deposit funds using various payment methods, and then use those funds to place bets on games. Winnings are credited to the player's account and can be withdrawn subject to the casino's terms and conditions."
    },
    {
      question: 'Are online casinos safe?',
      answer: "Licensed and regulated online casinos are safe to use. In the UK, online casinos must be licensed by the UK Gambling Commission, which enforces strict standards for player protection, fair gaming, and responsible gambling measures. Always check for a valid gambling license, secure connections (https), strong privacy policies, and read independent reviews before signing up."
    },
    {
      question: 'What games can I play at online casinos?',
      answer: "Online casinos offer a wide variety of games including slot machines, table games (blackjack, roulette, baccarat, poker), video poker, specialty games (keno, bingo, scratch cards), and live dealer games where real dealers run the games via video stream. The selection varies by casino, with some offering thousands of different games."
    },
    {
      question: 'How do I make deposits and withdrawals?',
      answer: "Most online casinos accept various payment methods including debit cards, e-wallets (PayPal, Skrill, Neteller), bank transfers, and prepaid cards. To deposit, log into your account, visit the cashier section, select your preferred payment method, and follow the instructions. Withdrawals work similarly but may require identity verification and have longer processing times."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-casinoDark-secondary" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-casinoYellow" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-casinoYellow" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-3 text-gray-300 text-sm md:text-base animate-fade-in">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
