import React from 'react';
import Image from 'next/image';

export default function ODIWebinarPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">November 2017 ODI Webinar</h1>
      
      <div className="mb-12">
        <a href="https://youtu.be/YTdjd6cZm0M" target="_blank">
          <Image
            src="/29nov17-webinar-screengrab.png"
            alt="29nov17-webinar"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </a>
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8">
          On November 29th, Lincoln hosted a webinar with the Open Data Initiative Project Leader Sean Roberts. All about the Open Data Initiative, why it matters, and how you can get involved. Viewers had the chance to ask questions during Q&A.
        </p>

        <p className="mb-8">
          Sean overviewed of the current state of open data in the US before diving into ODI's projects: from our current pilot program (in partnership with the California Policy Center and the Data Coalition) to future plans for improving government data management practices.
        </p>

        <div className="mt-8">
          <a 
            href="https://youtu.be/YTdjd6cZm0M" 
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Watch the Webinar Recording
          </a>
        </div>
      </section>
    </div>
  );
} 