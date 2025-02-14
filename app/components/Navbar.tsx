'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{ 
        backgroundImage: 'url(/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-16">
              <Image
                src="/odi-logo-white.png"
                alt="Open Data Initiative"
                width={300}
                height={80}
                className="h-full w-auto"
                priority
              />
            </div>
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block flex-grow px-8">
            <ul className="flex items-center justify-end space-x-8">
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/government-transparency" className="text-white hover:text-gray-200 font-medium">
                  Transparency
                </Link>
              </li>
              <li>
                <Link href="/regulations" className="text-white hover:text-gray-200 font-medium">
                  Regulations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-200 font-medium">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } pb-4 bg-gray-900 bg-opacity-95 rounded-b-lg`}
        >
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/about" 
              className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/government-transparency" 
              className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Transparency
            </Link>
            <Link 
              href="/regulations" 
              className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Regulations
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 