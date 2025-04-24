import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResponsibleGambling from '@/components/ResponsibleGambling';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-casinoDark to-casinoDark-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                            How we collect, use, and protect your personal information at euluckigiro.eu.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-casinoDark">
                    <div className="container mx-auto px-4 max-w-5xl text-gray-300">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">1. Introduction</h2>
                        <p className="mb-6">
                            At euluckigiro, we take your privacy seriously. This policy explains how we handle your personal data and what rights you have.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. What Data We Collect</h2>
                        <p className="mb-6">
                            We may collect personal data such as your name, email address, IP address, and website usage statistics via cookies and forms.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. How We Use Your Data</h2>
                        <ul className="list-disc list-inside mb-6 space-y-2">
                            <li>To provide and improve our services</li>
                            <li>To send marketing emails (only if you've opted in)</li>
                            <li>To analyze site usage and performance</li>
                            <li>To prevent fraud and maintain security</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. Data Sharing</h2>
                        <p className="mb-6">
                            We do not sell your personal information. We may share data with trusted partners who help us operate our website, as long as they follow similar privacy standards.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Your Rights</h2>
                        <p className="mb-6">
                            You have the right to access, correct, or delete your data. You can also object to data processing or withdraw your consent at any time.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">6. Contact</h2>
                        <p>
                            For privacy-related concerns, contact us via our contact page or email support@euluckigiro.eu.
                        </p>
                    </div>
                </section>

                <ResponsibleGambling />
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
