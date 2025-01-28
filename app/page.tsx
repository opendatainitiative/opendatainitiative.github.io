import React from 'react';
import Image from 'next/image'
import Regulations from './components/Regulations';
import Link from 'next/link';

export function generateCarouselSlides() {
  return [
    <Link href="/" key="regulations" className="block">
      <div className="relative h-[64px] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white p-2">
            <h2 className="text-lg font-bold mb-1">Open Data Regulations</h2>
            <p className="text-sm">
              Understanding and implementing open data compliance requirements
            </p>
          </div>
        </div>
      </div>
    </Link>,
    <Link href="/government-transparency" key="transparency" className="block">
      <div className="relative h-[64px] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white p-2">
            <h2 className="text-lg font-bold mb-1">Government Transparency</h2>
            <p className="text-sm">
              Making government finances accessible and transparent
            </p>
          </div>
        </div>
      </div>
    </Link>
  ];
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <Regulations />
      </div>
    </div>
  );
} 