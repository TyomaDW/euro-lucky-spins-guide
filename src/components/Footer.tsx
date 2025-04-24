
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Show success message and clear the form
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail('');
  };

  return (
    <footer className="bg-casinoDark-secondary pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/cookiepolicy" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Cookie Policy</Link></li>
              <li><Link to="/disclosure" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Disclosure</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Top Casinos */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Top Casinos</h3>
            <ul className="space-y-2">
              <li><a href="https://welcome.midnite.com/uk-big-bass-splash-bet-ps20-get-100-free-spins?utm_source=Affiliates&btag=a_574b_263c_3100371034396" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Midnite Casino</a></li>
              <li><a href="https://www.virgingames.com/" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Virgin Games</a></li>
              <li><a href="https://lp.betvictor.com/" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">BetVictor</a></li>
              <li><a href="https://www.dreamvegas.com/" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">Dream Vegas</a></li>
              <li><a href="https://www.32red.com/" className="text-gray-300 hover:text-casinoYellow transition-colors duration-200">32Red Casino</a></li>
            </ul>
          </div>




          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to get the latest bonus offers, casino reviews and news.</p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center border border-gray-700 rounded overflow-hidden">
                <span className="bg-gray-800 p-2">
                  <Mail className="h-5 w-5 text-gray-300" />
                </span>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-casinoDark text-white p-2 w-full outline-none text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-casinoRed hover:bg-casinoRed-hover text-white py-2 px-4 rounded transition-colors duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal & Disclaimers */}
        <div className="border-t border-gray-800 pt-6 pb-2">
          <p className="text-xs text-gray-400 mb-4">
            <strong>Disclaimer:</strong> This website contains affiliate links. We may receive a commission for purchases made through these links at no additional cost to you. As an affiliate, we only promote brands we trust and believe in. All opinions expressed on this site remain our own.
          </p>

          <p className="text-xs text-gray-400 mb-4">
            euluckigiro.eu is committed to responsible gambling. We support responsible gambling and self-exclusion. Gambling is a form of entertainment and should not be viewed as a way to make money. Do not gamble with money you cannot afford to lose.
          </p>

          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} euluckigiro.eu. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
