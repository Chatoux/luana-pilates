import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/hero-gym.jpg')" }}>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Luana Pilates</h1>
            <p className="mt-4 text-lg md:text-xl">Empower your body and mind</p>
            <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Get Started</button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default HomePage;
