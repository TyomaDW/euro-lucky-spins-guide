
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-casinoDark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-casinoRed mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Page Not Found</h2>
          <p className="text-gray-300 max-w-md mx-auto mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/"
            className="bg-casinoYellow hover:bg-casinoYellow-hover text-casinoDark font-bold py-3 px-8 rounded-full inline-block transition-colors duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
