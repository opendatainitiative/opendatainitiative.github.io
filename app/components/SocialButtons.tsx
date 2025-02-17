'use client'

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';

interface PreviewWindowProps {
  imagePath: string;
  isVisible: boolean;
}

const PreviewWindow: React.FC<PreviewWindowProps> = ({ imagePath, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      <div className="relative w-[300px] h-[200px]">
        <Image
          src={imagePath}
          alt="Preview"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default function SocialButtons() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'DOGE.gov',
      url: 'https://doge.gov',
      imagePath: '/doge_website.png'
    },
    {
      name: 'Cali_DOGE on X',
      url: 'https://x.com/cali_doge',
      imagePath: '/cali_doge_on_x.png'
    },
    {
      name: 'DOGE on X',
      url: 'https://x.com/doge',
      imagePath: '/doge_on_x.png'
    }
  ];

  return (
    <div className="fixed top-32 right-4 space-y-4 z-50">
      {socialLinks.map((link) => (
        <div
          key={link.name}
          className="group relative"
          onMouseEnter={() => setHoveredLink(link.url)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Button
            variant="outline"
            className="w-full transition-all duration-300 group-hover:scale-105 bg-white/90 backdrop-blur-sm"
            onClick={() => window.open(link.url, '_blank')}
          >
            {link.name}
          </Button>
          <PreviewWindow 
            imagePath={link.imagePath} 
            isVisible={hoveredLink === link.url} 
          />
        </div>
      ))}
    </div>
  );
} 