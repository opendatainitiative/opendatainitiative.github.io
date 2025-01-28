import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/footer'
import { generateCarouselSlides } from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Data Initiative',
  description: 'Advancing government financial transparency through open data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const carouselSlides = generateCarouselSlides();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar carouselSlides={carouselSlides} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 