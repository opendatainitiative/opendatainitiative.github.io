import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div 
      className="h-[120px]" 
      style={{
        backgroundImage: 'url(/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto h-full flex justify-between items-center px-8">
        <Link href="/">
          <Image 
            src="/odi-logo-white.png"
            alt="Open Data Initiative"
            width={300}
            height={80}
            priority
          />
        </Link>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/events" className="text-white text-sm tracking-wider">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/members" className="text-white text-sm tracking-wider">
                MEMBERS
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-white text-sm tracking-wider">
                NEWS
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white text-sm tracking-wider">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-white text-sm tracking-wider">
                RESOURCES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header; 