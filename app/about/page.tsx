import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">About DOGE</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The Department of Government Efficiency (DOGE) initiative aims to improve transparency 
            and efficiency in government operations through data-driven analysis.
          </p>
        </section>

        <section className="space-y-8 mb-12">
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
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <div className="space-y-4">
            <p>
              We analyze government spending and regulations through a three-layer approach:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>People:</strong> Understanding workforce distribution and roles</li>
              <li><strong>Infrastructure:</strong> Analyzing physical assets and operational costs</li>
              <li><strong>Services & IT:</strong> Examining digital infrastructure and service delivery</li>
            </ul>
            <p className="mt-4">
              Our goal is to provide clear, actionable insights that can lead to more efficient 
              government operations and better public services.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Get Involved</h2>
          <div className="space-y-4">
            <p>
              We welcome volunteers to help with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Strategy development and research</li>
              <li>Content updates and data analysis</li>
              <li>Social media engagement and outreach</li>
            </ul>
            <div className="mt-6">
              <p className="font-medium">How to contribute:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Follow us on X (Twitter) for updates</li>
                <li>Submit issues or pull requests on GitHub</li>
                <li>Share your expertise through content contributions</li>
              </ul>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                We maintain an apolitical approach, focusing solely on data analysis and transparency. 
                Our goal is to present facts and insights that can help improve government efficiency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}