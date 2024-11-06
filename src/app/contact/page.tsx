import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <form className="bg-white rounded-lg shadow-lg p-6" action="#" method="post">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500" />
            </div>
            <div className="text-center">
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Submit</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
export default ContactPage;
