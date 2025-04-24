import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Slots: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero */}
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Online Slots</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover the best online slot games, from classic fruit machines to thrilling video slots with bonus features and jackpots.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300 space-y-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What Are Online Slots?</h2>
                            <p>
                                Online slots are digital versions of the classic slot machines found in land-based casinos. They use random number generators (RNGs) to ensure fair play and are available in countless themes and formats.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Types of Slots</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Classic Slots:</strong> Simple 3-reel machines with few paylines, often inspired by traditional fruit slots.</li>
                                <li><strong>Video Slots:</strong> 5-reel or more with exciting themes, animations, and bonus features.</li>
                                <li><strong>Progressive Jackpots:</strong> These slots offer massive payouts that increase with every spin until someone wins.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tips for Playing</h2>
                            <p>
                                Always play slots from licensed providers and set a budget before you start. Take advantage of bonuses, and understand the volatility and RTP (Return to Player) of each game.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Top UK Slot Providers</h2>
                            <p>
                                Some of the most trusted developers offering slots in the UK include NetEnt, Microgaming, Play’n GO, and Big Time Gaming.
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

export default Slots;
