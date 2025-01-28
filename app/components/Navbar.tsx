import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from './ui/carousel'

interface NavbarProps {
  carouselSlides?: React.ReactNode[];
}

export function Navbar({ carouselSlides }: NavbarProps) {
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
        <div className="flex h-24 items-center">
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
          
          {/* Carousel */}
          {carouselSlides && (
            <div className="flex-grow px-8 bg-transparent">
              <Carousel 
                items={carouselSlides}
                autoPlay={true}
                interval={6000}
                className="h-16 bg-transparent"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 