import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Casinogames: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Best Online Casino Games</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            Discover the top games across UK online casinos, from slots to table games and live dealer experiences. Learn what makes a casino game fun, fair, and rewarding.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300 space-y-8">
                        <p>
                            Online casino games come in all shapes and sizes, catering to different styles of play, levels of skill, and preferences. From iconic fruit machines and video slots to strategic table games like blackjack and roulette, there’s something for everyone.
                        </p>
                        <p>
                            Live dealer games have brought an entirely new level of realism to the experience, offering high-definition video streams, real-time interaction with dealers, and immersive casino environments.
                        </p>
                        <p>
                            Top software providers include NetEnt, Microgaming, Evolution Gaming, and Play’n GO, all known for their exceptional graphics, features, and fair play.
                        </p>
                        <p>
                            Whether you enjoy spinning the reels or playing against a live dealer, we help you find the best games and casinos that are licensed, secure, and full of generous bonus opportunities.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default Casinogames;