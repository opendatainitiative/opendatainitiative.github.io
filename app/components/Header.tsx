import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/header-bg.png"
          alt="Header Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/odi-logo-white.png"
            alt="Open Data Initiative"
            width={350}
            height={100}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/events" className="text-white hover:text-gray-200 font-medium">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/members" className="text-white hover:text-gray-200 font-medium">
                MEMBERS
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-white hover:text-gray-200 font-medium">
                NEWS
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-gray-200 font-medium">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-white hover:text-gray-200 font-medium">
                RESOURCES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 