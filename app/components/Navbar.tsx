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
              <li className="group relative">
                <Link href="/about" className="text-white hover:text-gray-200 font-medium py-8 inline-block">
                  About
                </Link>
                <div className="absolute left-0 hidden group-hover:block pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link href="/about#mission" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Our Mission
                    </Link>
                    <Link href="/about#team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Our Team
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/government-transparency" className="text-white hover:text-gray-200 font-medium py-8 inline-block">
                  Transparency
                </Link>
                <div className="absolute left-0 hidden group-hover:block pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link href="/government-transparency#overview" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Overview
                    </Link>
                    <Link href="/government-transparency#initiatives" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Initiatives
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/regulations" className="text-white hover:text-gray-200 font-medium py-8 inline-block">
                  Regulations
                </Link>
                <div className="absolute left-0 hidden group-hover:block pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link href="/regulations#federal" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Federal
                    </Link>
                    <Link href="/regulations#state" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      State
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/blog" className="text-white hover:text-gray-200 font-medium py-8 inline-block">
                  Blog
                </Link>
                <div className="absolute left-0 hidden group-hover:block pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link href="/blog#latest" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Latest Posts
                    </Link>
                    <Link href="/blog#archive" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Archive
                    </Link>
                  </div>
                </div>
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
          <nav className="flex flex-col space-y-1">
            <div className="py-2">
              <Link 
                href="/about" 
                className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              >
                About
              </Link>
              <div className="pl-4 bg-gray-800 bg-opacity-50">
                <Link href="/about#mission" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Our Mission
                </Link>
                <Link href="/about#team" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Our Team
                </Link>
              </div>
            </div>
            <div className="py-2">
              <Link 
                href="/government-transparency" 
                className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              >
                Transparency
              </Link>
              <div className="pl-4 bg-gray-800 bg-opacity-50">
                <Link href="/government-transparency#overview" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Overview
                </Link>
                <Link href="/government-transparency#initiatives" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Initiatives
                </Link>
              </div>
            </div>
            <div className="py-2">
              <Link 
                href="/regulations" 
                className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              >
                Regulations
              </Link>
              <div className="pl-4 bg-gray-800 bg-opacity-50">
                <Link href="/regulations#federal" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Federal
                </Link>
                <Link href="/regulations#state" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  State
                </Link>
              </div>
            </div>
            <div className="py-2">
              <Link 
                href="/blog" 
                className="text-white hover:bg-gray-800 font-medium block px-4 py-2"
              >
                Blog
              </Link>
              <div className="pl-4 bg-gray-800 bg-opacity-50">
                <Link href="/blog#latest" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Latest Posts
                </Link>
                <Link href="/blog#archive" className="text-gray-200 hover:bg-gray-700 block px-4 py-2">
                  Archive
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
} 