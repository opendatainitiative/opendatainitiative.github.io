import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About</h1>

        <div className="space-y-8 mb-12">
          <div className="flex gap-8 items-start">
            <a href="https://www.linkedin.com/in/sarob/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/sean-roberts-headshot.png"
                alt="Sean Roberts"
                width={200}
                height={200}
                className="rounded"
              />
            </a>
            <div>
              <h3 className="text-xl font-bold mb-2">Sean Roberts</h3>
              <p className="mb-4">Sean is a founding member of the OpenStack Foundation. This is in addition to his 20+ years of technology experience at places like Stanford, Yahoo, EDS, ADP, and Electronic Arts. Sean is passionate about donating his time mentoring engineers, participating in technical conferences, leading open source projects, and other public works. As part of volunteering, Sean enjoys public speaking, with more than fifty talks and events over the past few years.</p>
              <p>
                <a 
                  href="https://linkedin.com/in/sarob" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>

          <h3 id="mission" className="text-2xl font-bold mb-4">Mission</h3>
          <div className="space-y-4">
            <p>
            The Open Data Institute is a non-profit group dedicated to promoting the use of open data for public benefit. We believe that open data can help solve some of the world's most pressing problems, and we are committed to making it easier for people to access and use open data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}