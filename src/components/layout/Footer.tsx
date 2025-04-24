
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-casino-card border-t border-casino-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center mb-4">
              <span className="text-casino-red">eu</span>
              chance
              <span className="text-casino-yellow">play</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted guide to UK casino sites with fair reviews and exclusive bonuses.
            </p>
            <div className="flex space-x-2">
              {/* Social media icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/disclosure">Affiliate Disclosure</FooterLink>
            </ul>
          </div>

          {/* Casino Guides */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Casino Guides</h4>
            <ul className="space-y-2">
              <FooterLink href="/guides/casino-games">Casino Games</FooterLink>
              <FooterLink href="/guides/roulette">Roulette</FooterLink>
              <FooterLink href="/guides/slots-guide">Online Slots</FooterLink>
              <FooterLink href="/guides/live-casino">Live Casino</FooterLink>
              <FooterLink href="/guides/rankings">How We Rank Casinos</FooterLink>
              <FooterLink href="/news">Latest Casino News</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers and casino news.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-casino-gray text-white rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-casino-red"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-casino-red hover:bg-opacity-90 text-white rounded-r px-4 py-2 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <hr className="border-casino-gray my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} euchanceplay.eu - All rights reserved
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p className="mb-2">18+ Gamble Responsibly. Terms & Conditions apply.</p>
            <p>
              This website contains affiliate links. We may receive a commission for purchases made through these links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-400 hover:text-white transition-colors flex items-center"
    >
      <ChevronRight className="h-4 w-4 text-casino-red mr-2" />
      {children}
    </Link>
  </li>
);

export default Footer;
