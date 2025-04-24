import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Roulette: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Roulette at an Online Casino</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            Learn about the different roulette variations available online and strategies to improve your gameplay.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Overview</h2>
                        <p className="mb-6">
                            Online roulette offers various types such as European, American, and French versions. Each type has slight differences in rules and odds.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Gameplay Tips</h2>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Learn the rules and differences between roulette variations.</li>
                            <li>Practice with free games before wagering real money.</li>
                            <li>Use betting strategies cautiously—no system guarantees a win.</li>
                            <li>Always set limits and play responsibly.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Top Casinos with Roulette Games</h2>
                        <p className="mb-6">
                            We recommend top-rated UK-licensed online casinos that feature live dealer and virtual roulette tables with high-quality gameplay and secure platforms.
                        </p>

                        <p className="mb-6">
                            Whether you're new to roulette or an experienced player, understanding the game mechanics and odds can help enhance your experience and keep play enjoyable.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default Roulette;