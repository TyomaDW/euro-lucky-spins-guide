import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const News: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Latest Casino News</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Stay informed with the latest updates, game releases, and industry insights in UK online gambling.
                        </p>
                    </div>
                </section>

                {/* News Content */}
                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-4xl text-gray-300 space-y-10">
                        <article>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">🎰 New Slot Releases This Month</h2>
                            <p>
                                Discover the hottest new slots launching this month from leading providers like NetEnt, Play’n GO, and Pragmatic Play. We cover bonus features, RTPs, volatility, and where to play them with exclusive offers.
                            </p>
                        </article>

                        <article>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">📢 UKGC Announces New Player Protection Measures</h2>
                            <p>
                                The UK Gambling Commission has introduced new rules for player affordability checks and bonus transparency. Learn how these changes impact your gameplay experience and what casinos must do to stay compliant.
                            </p>
                        </article>

                        <article>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">💰 Big Winners of the Week</h2>
                            <p>
                                We highlight real UK players who’ve recently won big – from progressive jackpot slots to huge table game streaks. Want to know which games are hitting? Read our roundup here.
                            </p>
                        </article>

                        <article>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">🧪 Game Testing & Reviews Coming Soon</h2>
                            <p>
                                We’re preparing in-depth reviews of new online games with gameplay videos and testing from real users. Follow us for updates on when these become available.
                            </p>
                        </article>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default News;
