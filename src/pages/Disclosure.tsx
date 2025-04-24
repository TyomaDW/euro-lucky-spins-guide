import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Disclosure: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Affiliate Disclosure</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                            Transparency is important to us. Learn how we make money through affiliate partnerships.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-5xl text-gray-300">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">1. Our Business Model</h2>
                        <p className="mb-6">
                            euluckigiro.eu is a free resource that provides information, reviews, and comparisons of online casinos licensed in the UK.
                            To keep our service free, we participate in affiliate marketing programs. This means we may earn a commission if you sign up
                            or make a purchase through links on our site.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. No Influence on Rankings</h2>
                        <p className="mb-6">
                            Our rankings and reviews are based on objective analysis, player feedback, and expert insight. Affiliate relationships do not
                            influence our opinions or rankings. We strive to maintain transparency and integrity in all our content.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. Your Trust Matters</h2>
                        <p className="mb-6">
                            Your trust is important to us. That’s why we clearly mark affiliate links and aim to disclose our relationships wherever relevant.
                            If you have any questions about our monetization model or specific partnerships, please get in touch.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. Thank You for Supporting Us</h2>
                        <p className="mb-6">
                            By using our links to sign up or make a deposit, you help support our work. Thank you for helping us maintain and improve the
                            quality of our service for all players in the UK.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default Disclosure;
