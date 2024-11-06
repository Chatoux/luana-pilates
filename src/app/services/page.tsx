import React from 'react';
import Header from '../components/Header';

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold">Private Sessions</h3>
              <p>Personalized one-on-one training sessions tailored to your specific needs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold">Group Classes</h3>
              <p>Join our small group classes for a supportive and engaging experience.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ServicesPage;
