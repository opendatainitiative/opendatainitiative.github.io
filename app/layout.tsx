import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Footer } from '@/app/components/footer'
import type { Metadata } from 'next'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Data Initiative',
  description: 'The Open Data Initiative works to ensure government finance data is consistent, transparent, and easily available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-gray-50 font-sans antialiased',
        inter.className
      )}>
        <Header />
        <div className="container mx-auto px-1">
          <main className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 my-2">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
} 