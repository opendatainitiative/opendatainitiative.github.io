import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div 
      style={{
        height: '120px',
        width: '100%',
        backgroundImage: 'url(/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ marginLeft: '96px' }}>
          <Link href="/">
            <Image 
              src="/odi-logo-white.png"
              alt="Open Data Initiative"
              width={300}
              height={80}
              priority
            />
          </Link>
        </div>

        <nav style={{ marginRight: '96px' }}>
          <ul style={{ 
            display: 'flex', 
            gap: '32px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li>
              <Link href="/events" style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}>
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/members" style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}>
                MEMBERS
              </Link>
            </li>
            <li>
              <Link href="/news" style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}>
                NEWS
              </Link>
            </li>
            <li>
              <Link href="/blog" style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}>
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/resources" style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}>
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