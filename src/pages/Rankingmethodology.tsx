import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const RankingMethodology: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero */}
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">How We Determined the Rankings</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Our comprehensive evaluation process ensures that only the best, most trusted UK online casinos are featured on euluckigiro.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300 space-y-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Core Evaluation Criteria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>UKGC Licensing:</strong> Only fully licensed and regulated casinos are considered.</li>
                                <li><strong>Bonuses & Promotions:</strong> We assess welcome offers, fair terms, and ongoing deals.</li>
                                <li><strong>Game Variety:</strong> Slots, live dealers, table games, and exclusives all count.</li>
                                <li><strong>Mobile Compatibility:</strong> We check mobile site performance and app availability.</li>
                                <li><strong>Customer Service:</strong> Live chat, email, and response times are tested.</li>
                                <li><strong>Withdrawal Speed:</strong> Fast and hassle-free payouts are a must.</li>
                                <li><strong>Reputation:</strong> Based on player feedback, history, and transparency.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Testing Process</h2>
                            <p>
                                Each casino goes through a real-money test phase. Our team deposits funds, plays various games, engages with customer support, and completes a full withdrawal to assess every detail from a player's point of view.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Continuous Monitoring</h2>
                            <p>
                                Our rankings are dynamic. If a casino drops in quality, changes its terms, or fails to meet our standards, we adjust its position—or remove it altogether. Likewise, rising stars can be added as they earn trust and reputation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Transparency</h2>
                            <p>
                                While we may earn commissions from some featured brands, it does not influence our evaluations. Our goal is to help users find safe, rewarding, and entertaining casino experiences.
                            </p>
                        </div>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default RankingMethodology;
