import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-2xl font-bold text-indigo-600">Luana Pilates</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/about"><a className="text-gray-800 hover:text-indigo-600">About</a></Link>
            <Link href="/services"><a className="text-gray-800 hover:text-indigo-600">Services</a></Link>
            <Link href="/contact"><a className="text-gray-800 hover:text-indigo-600">Contact</a></Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
