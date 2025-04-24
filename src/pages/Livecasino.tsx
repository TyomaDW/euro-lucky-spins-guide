import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Livecasino: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero */}
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Live Casino Online</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience the thrill of real-time casino games streamed live to your device, with professional dealers and HD video.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300 space-y-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What is Live Casino?</h2>
                            <p>
                                Live casino games are broadcast from real studios or casino floors where live dealers deal cards, spin wheels, or roll dice. Players interact in real time using chat and UI controls, combining the convenience of online play with the social feel of land-based gaming.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Popular Live Casino Games</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Live Blackjack:</strong> Beat the dealer without going over 21.</li>
                                <li><strong>Live Roulette:</strong> Watch the wheel spin and bet on your lucky number or color.</li>
                                <li><strong>Live Baccarat:</strong> High-stakes card action with player, banker, and tie bets.</li>
                                <li><strong>Game Shows:</strong> Play Dream Catcher, Monopoly Live, Crazy Time, and more.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Top Providers</h2>
                            <p>
                                Evolution Gaming, Playtech, and Pragmatic Play Live are leaders in live dealer technology, offering top-tier streaming, diverse tables, and innovative formats.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tips for Live Casino Success</h2>
                            <p>
                                Ensure a stable internet connection, know the rules of the game you're playing, and manage your bankroll carefully. Use bonuses that are compatible with live games when available.
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

export default Livecasino;
