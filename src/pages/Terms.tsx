import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Terms of Service</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                            Please read these terms carefully before using euluckigiro.eu. By accessing or using our site, you agree to be bound by these terms.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-5xl text-gray-300">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">1. Website Use</h2>
                        <p className="mb-6">
                            euluckigiro.eu is intended for users aged 18 or older who are interested in learning about online casino sites. You may not use this site if you are under 18 or reside in a jurisdiction where online gambling is illegal.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. No Gambling or Wagering</h2>
                        <p className="mb-6">
                            We do not offer gambling or accept bets on our website. We provide information and links to third-party casino sites for informational and comparison purposes only.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. Affiliate Relationships</h2>
                        <p className="mb-6">
                            Some links on our website are affiliate links. This means we may receive a commission if you sign up or make a purchase through these links. However, this does not influence our reviews or rankings.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. No Guarantee of Accuracy</h2>
                        <p className="mb-6">
                            We strive to ensure all information is accurate and up-to-date, but we make no guarantees. Casinos may change terms or offers without notice. Always check the casino’s website for the latest information.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Limitation of Liability</h2>
                        <p className="mb-6">
                            We are not responsible for any losses or damages arising from your use of this site or your interaction with third-party casino websites. Use all services at your own risk.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">6. Changes to Terms</h2>
                        <p>
                            We may update these Terms of Service at any time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
