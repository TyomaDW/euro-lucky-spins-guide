import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Cookie Policy</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            Learn how euluckigiro.eu uses cookies to enhance your browsing experience.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-casinoDark text-gray-300">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">1. What Are Cookies?</h2>
                        <p className="mb-6">
                            Cookies are small text files placed on your device by websites you visit. They help improve your experience by remembering your preferences and enabling essential site features.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. How We Use Cookies</h2>
                        <p className="mb-6">
                            We use cookies to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Remember your preferences and settings</li>
                            <li>Enable essential website functionality</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Improve performance and user experience</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. Types of Cookies We Use</h2>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li><strong>Essential Cookies</strong> – Required for the website to function properly</li>
                            <li><strong>Analytics Cookies</strong> – Help us understand how visitors interact with our website</li>
                            <li><strong>Marketing Cookies</strong> – Used by affiliate networks to track referrals and commissions</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. Third-Party Cookies</h2>
                        <p className="mb-6">
                            Some cookies may be set by third-party services like analytics platforms or affiliate tracking systems. These providers have their own privacy and cookie policies.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Managing Cookies</h2>
                        <p className="mb-6">
                            You can manage or delete cookies through your browser settings. Most browsers allow you to reject all or some cookies, or alert you when a cookie is being placed.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">6. Consent</h2>
                        <p className="mb-6">
                            By continuing to use our site, you consent to the use of cookies as described in this policy. You may withdraw consent at any time by adjusting your cookie preferences or browser settings.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
