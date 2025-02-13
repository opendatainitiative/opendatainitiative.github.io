import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
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
          
          {/* Navigation Menu */}
          <nav className="flex-grow px-8">
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
      </div>
    </header>
  )
} 