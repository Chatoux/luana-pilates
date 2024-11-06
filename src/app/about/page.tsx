import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">About Luana Pilates</h2>
          <p className="text-lg leading-relaxed">Luana Pilates is dedicated to helping you achieve a balanced and healthy lifestyle through personalized pilates sessions. Our experienced instructors provide one-on-one training tailored to your specific goals.</p>
          <img src="/trainer-client.jpg" alt="Trainer helping client" className="rounded-lg shadow-lg mx-auto" />
        </section>
      </main>
    </div>
  );
};
export default AboutPage;
